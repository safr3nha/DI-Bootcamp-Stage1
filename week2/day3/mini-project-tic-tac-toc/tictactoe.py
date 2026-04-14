def display_board(board):
    print(board[0][0] + "|" + board[0][1] + "|" + board[0][2])
    print("-+-+-")
    print(board[1][0] + "|" + board[1][1] + "|" + board[1][2])
    print("-+-+-")
    print(board[2][0] + "|" + board[2][1] + "|" + board[2][2])

def check_win(board, player):
    if board[0][0] == player and board[0][1] == player and board[0][2] == player:
        return True
    if board[1][0] == player and board[1][1] == player and board[1][2] == player:
        return True
    if board[2][0] == player and board[2][1] == player and board[2][2] == player:
        return True
    if board[0][0] == player and board[1][0] == player and board[2][0] == player:
        return True
    if board[0][1] == player and board[1][1] == player and board[2][1] == player:
        return True
    if board[0][2] == player and board[1][2] == player and board[2][2] == player:
        return True
    if board[0][0] == player and board[1][1] == player and board[2][2] == player:
        return True
    if board[0][2] == player and board[1][1] == player and board[2][0] == player:
        return True
    return False

def play():
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
    current_player = "X"
    turns = 0
    
    print("Tic Tac Toe Game")
    
    while turns < 9:
        display_board(board)
        print("Player " + current_player + " turn")
        
        row = int(input("Enter row (0-2): "))
        col = int(input("Enter col (0-2): "))
        
        if board[row][col] == " ":
            board[row][col] = current_player
            turns = turns + 1
            
            if check_win(board, current_player):
                display_board(board)
                print("CONGRATULATIONS!")
                print("Player " + current_player + " is the winner!")
                return
            
            if current_player == "X":
                current_player = "O"
            else:
                current_player = "X"
        else:
            print("Spot taken, try again")
            
    display_board(board)
    print("It is a tie!")

play()