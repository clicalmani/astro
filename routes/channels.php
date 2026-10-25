<?php

// Topic standard — TTL global (15 min)

use Broadcaster\Channels\Channel;

Channel::make('orders.{order}', function ($user, $orderId) {
    $order = Order::find($orderId);
    return $order && $order->user_id === $user->id;
})->ttl(3600);