<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->boolean('is_quote')->default(false)->after('message');
            $table->string('service_type')->nullable()->after('is_quote');
            $table->string('location')->nullable()->after('service_type');
            $table->text('project_details')->nullable()->after('location');
            $table->string('budget_range')->nullable()->after('project_details');
            $table->string('attachment_path')->nullable()->after('budget_range');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contact_messages', function (Blueprint $table) {
            $table->dropColumn([
                'is_quote',
                'service_type',
                'location',
                'project_details',
                'budget_range',
                'attachment_path'
            ]);
        });
    }
};
