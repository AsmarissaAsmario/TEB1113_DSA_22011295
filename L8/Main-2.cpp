/*
**********************
ID: 22011295
Name: Nor Asmarissa Binti Mohd Asmario
Contact: 012-3739088
Email: NOR_22011295@utp.edu.my
Lab: 8
*/

#include <iostream>
using namespace std;

struct Node {
    int data;
    Node *left, *right;
    
    // bila kita cipta node baru, automatik left & right kosong
    Node(int d){
        data = d;
        left = nullptr;
        right = nullptr;
    }
}; // this code do the structure first called Node , and inside Node it has data, left and right

class BinSearchTree {  // Binary Search Tree (BST) class is to manage insertion and searching for values
public:
    Node* root; //the root , where all started here

    //bila kita cipta tree, mula-mula kosong . sebab tu nullptr
    BinSearchTree() : root(nullptr) {
      
    } 
    // ni fungsi untuk letak nombor dalam tree (insert)
    void insert(int data) { 
      root = insert_rec(root, data); // recusive is fungsi yang panggil diri sendiri untuk selesaikan masalah.
    }

    bool search(int data) const {
      return search_rec(root, data); 
      
    }
private: //digunakan untuk hide implementation details which means only coder 
//kalau function/data tu hanya untuk class guna sendiri → letak dalam private:
//kalau function tu untuk user guna → letak dalam public:

    Node* insert_rec(Node* current, int data) { 
        if (!current) return new Node(data); // found empty spot so add node
        
        //decide where to put the number
        if (data < current->data)
            current->left  = insert_rec(current->left,  data); //go left is smaller
        else if (data > current->data)
            current->right = insert_rec(current->right, data); //go right if bigger
       

        return current; //return the updated node
    }

    /* Recursive helper for search */
    bool search_rec(Node* current, int data) const {
        if (!current)               return false; //reached end so means its not found
        if (current->data == data)    return true; //found it
        if (data < current->data)     return search_rec(current->left,  data);
        else{                 
        return search_rec(current->right, data);
        }
    }
};

int main() {
    BinSearchTree tree;

    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int v : values) tree.insert(v);

    cout << "60? " << (tree.search(60) ? "Found" : "Not found") << '\n';
    cout << "25? " << (tree.search(25) ? "Found" : "Not found") << '\n';

    return 0;
}