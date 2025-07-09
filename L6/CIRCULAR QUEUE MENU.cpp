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

class CircularQueue {
    int arr[SIZE];
    int front, rear;

public:
    CircularQueue() {
        front = rear = -1;
    }

    void enqueue(int x) {
        if ((front == 0 && rear == SIZE - 1) || (rear + 1) % SIZE == front) {
            cout << "Circular Queue is FULL!\n";
            return;
        }

        if (front == -1) {
            front = rear = 0;
        } else {
            rear = (rear + 1) % SIZE;
        }

        arr[rear] = x;
        cout << x << " added to Circular Queue.\n";
    }

    void dequeue() {
        if (front == -1) {
            cout << "Circular Queue is EMPTY!\n";
            return;
        }

        cout << arr[front] << " removed from Circular Queue.\n";

        if (front == rear) {
            front = rear = -1; // Queue became empty
        } else {
            front = (front + 1) % SIZE;
        }
    }

    void display() {
        if (front == -1) {
            cout << "Circular Queue is EMPTY!\n";
            return;
        }

        cout << "Circular Queue: ";
        int i = front;
        while (true) {
            cout << arr[i] << " ";
            if (i == rear)
                break;
            i = (i + 1) % SIZE;
        }
        cout << endl;
    }
};

int main() {
    CircularQueue q;
    int choice, value;

    do {
        cout << "\n=== CIRCULAR QUEUE MENU ===\n";
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