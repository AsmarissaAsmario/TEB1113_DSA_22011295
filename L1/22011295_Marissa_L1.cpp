/*
**********************
ID: 22011295
Name: Nor Asmarissa Binti Mohd Asmario
Contact: 012-3739088
Email: NOR_22011295@utp.edu.my
Lab: 1
*/

#include <iostream>
#include <string> // C++ itself doesnt have string
using namespace std;

// Student structure
struct Student {
  string name;
  string email;
  int number;
  int id;
};

int main() 
{
  Student std[5]; // Array of 5 students
  for (int i = 0; i < 5; i++) {
    cout<<"*******************************"<<endl;
    cout<<"Student " << (i + 1) << endl;
    cout<<"Name: ";
    getline (cin, std[i].name); // can write the answer with space
    
    cout<<"ID: ";
    cin>>std[i].id;
    
    cout<<"Email: ";
    cin>>std[i].email;
    
    cout<<"Phone Number: ";
    cin>>std[i].number;
    
  }
    
}