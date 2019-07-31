#!/bin/bash
mkdir CLI
cd CLI
touch pets.txt
echo "cat" > pets.txt 
echo "dog" >> pets.txt
echo "hamster" >> pets.txt  


touch commands.txt
echo "cat" > commands.txt 
echo "ls" >> commands.txt 
echo "pwd" >> commands.txt 


cat pets.txt commands.txt | sort | uniq > lovelyCommands.txt
mkdir newDirectory
cd newDirectory
touch greetings.txt
for i in {1..5}; do echo "Hello" >> greetings.txt ; done
for i in {1..5}; do cat greetings.txt > $i.txt ; done

