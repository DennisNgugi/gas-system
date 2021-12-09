<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecieptsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reciepts', function (Blueprint $table) {
            $table->id();
            $table->string('reciept_code');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('set null');
            $table->double('total_quantity');
            $table->double('total_amount');
            $table->double('amount_paid');
            $table->double('discount')->default(0);
            $table->double('balance');
            $table->string('payment_mode'); // cash , mpesa-till , mpesa-paybill ,both
            $table->mediumText('remarks')->nullable();
            $table->string('customer_id')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('message_time')->nullable();
            $table->boolean('payment_status')->default(1);
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
            $table->index(['created_at','reciept_code']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reciepts');
    }
}
