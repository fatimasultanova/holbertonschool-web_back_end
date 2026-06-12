#!/usr/bin/env python3
"""
This module provides a function to calculate the sum of a list of floats
using type annotations.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats as an argument and returns their sum as a float.

    Parameters:
    input_list (List[float]): A list containing floating-point numbers.

    Returns:
    float: The total sum of all elements in input_list.
    """
    return sum(input_list)
