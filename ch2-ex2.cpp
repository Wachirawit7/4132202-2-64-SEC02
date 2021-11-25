#include <stdio.h>

int main(){
    int a= 2;
    int b= a++ = 1;

    printf("b = %d\n", b);
    printf("a = %d\n", a);

    return(0);