/*
**********************
ID: 22011295
Name: Nor Asmarissa Binti Mohd Asmario
Contact: 012-3739088
Email: NOR_22011295@utp.edu.my
Lab: 9
*/

#include <iostream>
#include <vector>
#include <queue>
using namespace std;

class Graph {
private:
    vector<string> vertex_data = {"A", "B", "C", "D", "E"};
    vector<vector<int>> adj_matrix = {
        // A  B  C  D  E
        {0, 1, 1, 1, 0}, // A
        {1, 0, 0, 1, 1}, // B
        {1, 0, 0, 1, 0}, // C
        {1, 1, 1, 0, 1}, // D
        {0, 1, 0, 1, 0}  // E
    };
    int size = 5;

public:
    void bfs(const string& start_label) {
        int start = -1;
        for (int i = 0; i < size; i++) {
            if (vertex_data[i] == start_label) {
                start = i;
                break;
            }
        }

        if (start == -1) {
            cout << "Start vertex not found.\n";
            return;
        }

        vector<bool> visited(size, false);
        queue<int> q;

        visited[start] = true;
        q.push(start);

        cout << "BFS from " << start_label << ": ";

        while (!q.empty()) {
            int current = q.front();
            q.pop();
            cout << vertex_data[current] << " ";

            for (int i = 0; i < size; i++) {
                if (adj_matrix[current][i] == 1 && !visited[i]) {
                    q.push(i);
                    visited[i] = true;
                }
            }
        }

        cout << endl;
    }
};

int main() {
    Graph g;
    g.bfs("D");  // BFS from vertex D
    return 0;
}
