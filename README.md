# JavaScript Subtle Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling.  The `foo` function is designed to add two numbers. However, it returns 0 even if only one of the inputs is null. This may not always be the desired behavior.  The solution provides an alternative implementation that either returns NaN or throws an error, depending on the desired outcome.

## Bug Description

The original implementation has a simplified null check. It returns 0 immediately if either `a` or `b` is null, rather than considering other possibilities like returning `NaN` or handling the null values in a more nuanced way. This can lead to unexpected results or mask potential problems in larger applications. 

## Solution

The solution explores a couple of different ways to handle this case. One returns `NaN` to explicitly indicate an invalid operation, while the other throws an error to signal a more serious problem that should be addressed.
