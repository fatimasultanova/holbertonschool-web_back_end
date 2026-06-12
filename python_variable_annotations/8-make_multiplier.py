#!/usr/bin/env python3
"""
This module contains a function that returns a multiplier function
using Callable type annotations.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates and returns a function that multiplies a float by multiplier.

    Parameters:
    multiplier (float): The multiplier factor.

    Returns:
    Callable[[float], float]: A function that takes a float and multiplies
    it by the structural multiplier factor.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
