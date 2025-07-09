/*
**********************
ID: 22011295
Name: Nor Asmarissa Binti Mohd Asmario
Contact: 012-3739088
Email: NOR_22011295@utp.edu.my
Lab: 6
*/

#include <iostream>
#define SIZE 5

using namespace std;

class ArrayQueue {
    int arr[SIZE];
    int front, rear;

public:
    ArrayQueue() {
        front = rear = -1;
    }

    void enqueue(int x) {
        if (rear == SIZE - 1) {
            cout << "Array Queue is FULL!\n";
            return;
        }
        if (front == -1)
            front = 0;
        arr[++rear] = x;
        cout << x << " added to Array Queue.\n";
    }

    void dequeue() {
        if (front == -1 || front > rear) {
            cout << "Array Queue is EMPTY!\n";
            return;
        }
        cout << arr[front++] << " removed from Array Queue.\n";
        if (front > rear)
            front = rear = -1; // Reset when queue is empty
    }

    void display() {
        if (front == -1) {
            cout << "Array Queue is EMPTY!\n";
            return;
        }
        cout << "Array Queue: ";
        for (int i = front; i <= rear; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    ArrayQueue q;
    int choice, value;

    do {
        cout << "\n=== ARRAY QUEUE MENU ===\n";
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