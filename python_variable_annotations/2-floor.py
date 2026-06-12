#!/usr/bin/env python3
"""
This module provides a function to calculate the floor of a given float
using type annotations.
"""
import math


def floor(n: float) -> int:
    """
    Takes a float n as an argument and returns its floor as an integer.

    Parameters:
    n (float): The floating-point number to evaluate.

    Returns:
    int: The largest integer less than or equal to n.
    """
    return math.floor(n)
