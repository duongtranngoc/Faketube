<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    public function getChannels()
    {
        $channels = Channel::select('ChannelId', 'ChannelName', 'Description', 'SubscribersCount', 'URL')
            ->latest() // Sắp xếp theo bản ghi mới nhất
            ->get();
        return response()->json($channels);
    }

    public function createChannel(Request $request)
    {
        // Kiểm tra và xác thực dữ liệu đầu vào
        $validatedData = $request->validate([
            'ChannelName' => 'required|string',
            'Description' => 'nullable|string',
            'SubscribersCount' => 'nullable|integer',
            'URL' => 'nullable|url',
        ]);

        // Tạo một bản ghi mới với dữ liệu được cung cấp
        $channel = Channel::create($validatedData);

        // Trả về phản hồi JSON với bản ghi vừa được tạo
        return response()->json($channel, 201);
    }

    public function deleteChannel(Request $request)
    {
        $channelId = $request->input('ChannelId');
        $channel = Channel::find($channelId);

        if (!$channel) {
            return response()->json([
                'message' => 'Channel not found.',
            ], 404);
        }

        $channel->delete();

        return response()->json([
            'message' => 'Channel deleted successfully.',
        ], 200);
    }
}
