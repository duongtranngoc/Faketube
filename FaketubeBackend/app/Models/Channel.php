<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    protected $table = 'channels';
    protected $primaryKey = 'ChannelId'; // Tên cột khóa chính
    public $incrementing = false; // Không tự động tạo giá trị tăng tự động cho khóa chính

    protected $fillable = ['ChannelId', 'ChannelName', 'Description', 'SubscribersCount', 'URL'];
}
