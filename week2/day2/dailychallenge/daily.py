import re

MATRIX_STR = '''7ir
Tsi
h%x
i ?
sM# 
$a 
#t%'''

rows = MATRIX_STR.strip('\n').split('\n')
matrix = [list(row) for row in rows]

num_rows = len(matrix)
num_cols = max(len(row) for row in matrix)

raw_content = ""

for c in range(num_cols):
    for r in range(num_rows):
        if c < len(matrix[r]):
            raw_content += matrix[r][c]

decoded_message = re.sub(r'(?<=[a-zA-Z])([^a-zA-Z]+)(?=[a-zA-Z])', ' ', raw_content)

final_output = ""
for char in decoded_message:
    if char.isalpha() or char == " ":
        final_output += char

print(final_output.strip())
PS C:\Users\henri\Desktop\DI-Bootcamp-Stage1\week2\day2> & C:\Users\henri\AppData\Local\Python\bin\python.exe c:/Users/henri/Desktop/DI-Bootcamp-Stage1/week2/day2/dailychallenge/daily.py
This is Matrix