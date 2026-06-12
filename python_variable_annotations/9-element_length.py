#!/usr/bin/env python3
"""
This module provides a duck-typed function to compute the structural
lengths of elements inside an iterable object.
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable collection of sequences and maps each item to its length.

    Parameters:
    lst (Iterable[Sequence]): An iterable containing sequences.

    Returns:
    List[Tuple[Sequence, int]]: A list of tuples containing the sequence
    and its integer length.
    """
    return [(i, len(i)) for i in lst]
