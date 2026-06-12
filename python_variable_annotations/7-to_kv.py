#!/usr/bin/env python3
"""
This module contains a function that transforms a key and a number value
into a string-float tuple.
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Takes a string and a number, returning a tuple of the string and the
    squared number as a float.

    Parameters:
    k (str): The string identifier key.
    v (Union[int, float]): The value to be squared.

    Returns:
    Tuple[str, float]: A tuple where element 1 is k, element 2 is v squared.
    """
    return (k, float(v ** 2))
