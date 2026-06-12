#!/usr/bin/env python3
"""
This module provides a function that wraps an asynchronous coroutine
into a regular asyncio.Task.
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task wrapper
    around the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
