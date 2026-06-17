#!/usr/bin/env python3
"""
This module provides a coroutine to measure the runtime of executing
multiple asynchronous comprehensions in parallel.
"""

import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Execute async_comprehension four times in parallel using asyncio.gather.
    Measure and return the total execution time.
    """
    start_time = time.perf_counter()

    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()
    return end_time - start_time
