import csv

years = []
life = []

with open('data.txt') as csvfile:
    reader = csv.reader(csvfile, delimiter = " " )
    for row in reader:
        years.append(row[0])
        life.append(row[10])

str = '['
for age in life:
    str += age + ', '

str += ']'
print str