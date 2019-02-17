from threading import Timer

def timeoutF():

def pickChamp(champions, team):
    champ = ""
    while champ not in champions:
        champ = str(raw_input("PICK CHAMPION:"))
    champions.remove(champ)
    team.append(champ)

def banChamp(champions):
    champ = ""
    while champ not in champions:
        champ = str(raw_input("BAN CHAMPION:"))
    champions.remove(champ)
    print(champ + " BANNED")

def banMap(maps):
    map = ""
    while map not in maps:
        map = str(raw_input("BAN MAP:"))

    maps.remove(map)
    print(map + " BANNED")


teamA = []
teamB = []
championsA = {"Shen Rao", "Ashka", "Thorn", "Oldur", "Bakko", "Croak", "Freya",
"Jumong", "Lucie", "Pestilus", "Raigon", "Shifu", "Ezmo", "Iva", "Jamila",
"Pearl", "Poloma", "Sirius", "Varesh", "Alysia", "Destiny", "Jade", "Ruh Kaan",
"Rook", "Taya", "Ulric"}
championsB = {"Shen Rao", "Ashka", "Thorn", "Oldur", "Bakko", "Croak", "Freya",
"Jumong", "Lucie", "Pestilus", "Raigon", "Shifu", "Ezmo", "Iva", "Jamila",
"Pearl", "Poloma", "Sirius", "Varesh", "Alysia", "Destiny", "Jade", "Ruh Kaan",
"Rook", "Taya", "Ulric"}
maps = {"Orman Temple Night", "Sky Arena Night", "Mount Araz Day",
"Mount Araz Night", "Blackstone Arena Day", "Blackstone Arena Night",
"Dragon Garden Day", "Dragon Garden Night", "Daharin Blackgrounds Day",
"Daharin Blackgrounds Night", "Meriko Summer Night"}
format = 1 # 3 if BO3

while(len(maps) != format):
    banMap(maps)

t = Timer(35.0, timeoutF)

# this has to be paralel, not alternate.
banChamp(championsA)
banChamp(championsB)
# +30s
pickChamp(championsA, teamA)
pickChamp(championsB, teamB)
# +30s
pickChamp(championsA, teamA)
pickChamp(championsB, teamB)
# +30s
banChamp(championsA)
banChamp(championsB)
# +30s
pickChamp(championsA, teamA)
pickChamp(championsB, teamB)
