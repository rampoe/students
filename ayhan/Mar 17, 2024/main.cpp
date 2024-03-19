#include <iostream>
#include <cmath>

int main()
{
    int n = 0;
    std::cout << "Enter n: ";
    std::cin >> n;
    if (n % 2 == 0)
    {
        std::cout << "The number is even." << std::endl;
    }
    else
    {
        std::cout << "The number is odd." << std::endl;
    }
    return 0;
}