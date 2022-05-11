import more_itertools as mit

def dot_partition(word):
    # spaces are characters
    return [".".join(list(map("".join, e))) for e in mit.partitions(word)]

if __name__ == "__main__":
    while True:
        word = input("Enter string to dot partition\n")
        print(dot_partition(word))
