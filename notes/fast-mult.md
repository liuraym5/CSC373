## 2. Fast Multiplication

Our **input** is $ X, Y$, where both are $ n$ -digit integers. Our output is $X \times Y$.  
The typical algorithm we know for multiplication \(the one taught in grade school\) takes $O(n^2)$ complexity.  
Kuratsuba's algorithm significantly improves this complexity by trying to limit the amount of multiplication done.

Assume $ n $ is a power of 2, by padding if necessary. Then $ n = 2^k $ for some $ k \in \mathbb N$.  
Then we can split $X,Y$ into two halves, an upper and a lower, so if $X = 1,234,567$, we would write  
$X = 01234567, X_1 = 0123, X_2 = 4567$. In this way, we have


$$
X = 10^{\frac{n}{2}}X_1 + X_2
$$



$$
Y = 10^{\frac{n}{2}}Y_1 + Y_2
$$



$$
XY = (10^{\frac{n}{2}}X_1 + X_2) (10^{\frac{n}{2}}Y_1 + Y_2)
$$


Because we are in base 10, multiplication by 10 is an $O(n)$ operation, and so we save some time with that.

```python
from math import floor, pow


# get the nearest power of 2
def power2(num):
    return 1 << (num-1).bit_length()


def mult(x, y):
    str_x = str(x)
    str_y = str(y)

    len_x = len(str_x)
    len_y = len(str_y)

    # pad the lesser to make them both the same size
    if len_x <= len_y:
        str_x = "0"*(len_y - len_x) + str_x
        # update the length
        len_x = len(str_x)
    else:
        str_y = "0"*(len_x - len_y) + str_y
        # update the length
        len_y = len(str_y)

    # find the nearest power of two, since we
    # adjusted the length, it doesn't matter if we use
    # `len_x` or `len_y`
    padding = power2(len_x) - len_x
    str_x = "0"*padding + str_x
    str_y = "0"*padding + str_y

    len_x = len(str_x)
    len_y = len(str_y)

    n = len_x

    if n == 1:
        return x * y

    x_arr = [ch for ch in str_x]
    y_arr = [ch for ch in str_y]

    middle = int(floor(n / 2))

    _X1 = x_arr[:middle]
    _X2 = x_arr[middle:]

    _Y1 = y_arr[0:middle]
    _Y2 = y_arr[middle:]

    X1 = _X1 if _X1 else ["0"]
    X2 = _X2 if _X2 else ["0"]
    Y1 = _Y1 if _Y1 else ["0"]
    Y2 = _Y2 if _Y2 else ["0"]

    x1 = int("".join(X1))
    x2 = int("".join(X2))

    y1 = int("".join(Y1))
    y2 = int("".join(Y2))

    A = mult(x1, y1)
    B = mult(x2, y2)
    t1 = x1 + x2
    t2 = y1 + y2
    C = mult(t1, t2)

    return int(pow(10, n) * A + pow(10, middle) * (C - A - B) +
```

Testing the above gives the following output:

```
test
11 * 21 = 231 = mult(11, 21) = 231
1  * 21 = 21  = mult(1, 21)  = 21
21 * 11 = 231 = mult(21, 11) = 231
```



