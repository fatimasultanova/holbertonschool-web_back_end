#!/usr/bin/env python3
"""
This module provides a function to sum a mixed list of integers and floats
using type annotations.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Takes a mixed list of integers and floats and returns their sum as a float.

    Parameters:
    mxd_lst (List[Union[int, float]]): A list containing integers and floats.

    Returns:
    float: The sum of all elements in mxd_lst.
    """
    return float(sum(mxd_lst))
