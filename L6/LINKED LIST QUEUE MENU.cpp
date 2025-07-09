/*
**********************
ID: 22011295
Name: Nor Asmarissa Binti Mohd Asmario
Contact: 012-3739088
Email: NOR_22011295@utp.edu.my
Lab: 6
*/

#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

class LinkedListQueue {
    Node *front, *rear;

public:
    LinkedListQueue() {
        front = rear = nullptr;
    }

    void enqueue(int x) {
        Node* temp = new Node();
        temp->data = x;
        temp->next = nullptr;

        if (rear == nullptr) {
            front = rear = temp;
        } else {
            rear->next = temp;
            rear = temp;
        }

        cout << x << " added to Linked List Queue.\n";
    }

    void dequeue() {
        if (front == nullptr) {
            cout << "Linked List Queue is EMPTY!\n";
            return;
        }

        Node* temp = front;
        cout << front->data << " removed from Linked List Queue.\n";
        front = front->next;
        delete temp;

        if (front == nullptr)
            rear = nullptr;
    }

    void display() {
        if (front == nullptr) {
            cout << "Linked List Queue is EMPTY!\n";
            return;
        }

        cout << "Linked List Queue: ";
        Node* temp = front;
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

int main() {
    LinkedListQueue q;
    int choice, value;

    do {
        cout << "\n=== LINKED LIST QUEUE MENU ===\n";
        cout << "1. Enqueue\n";
        cout << "2. Dequeue\n";
        cout << "3. Display\n";
        cout << "0. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
        case 1:
            cout << "Enter value to enqueue: ";
            cin >> value;
            q.enqueue(value);
            break;

        case 2:
            q.dequeue();
            break;

        case 3:
            q.display();
            break;

        case 0:
            cout << "Exiting program...\n";
            break;

        default:
            cout << "Invalid choice. Try again.\n";
        }

    } while (choice != 0);

    return 0;
}