# Домашнее задание 2. 
## FLEXBOX FROGGY

1. Направь этого лягушонка на лилию справа используя свойство justify-content.
    <img src="pics\01.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: flex-end;
    }
    ```

    <img src="pics\11.png" width="400">

2. Используй justify-content еще раз, чтоб помочь этим лягушатам попасть на их лилии. 
    <img src="pics\02.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: center;
    }
    ```
    <img src="pics\12.png" width="400">

3. Помоги всем трем лягушатам найти их лилии, просто используя justify-content. В этот раз, у лилий много пространства вокруг.

    <img src="pics\03.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: space-around;
    }
    ```
    <img src="pics\13.png" width="400">

4. В этот раз, у лилий одинаковое расстояние между ними.

    <img src="pics\04.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: space-between;
    }
    ```
    <img src="pics\14.png" width="400">

5. Теперь используй align-items чтоб помочь лягушатам добратся к нижней части пруда.

    <img src="pics\05.png" width="400">

    ```css
    #pond {
        display: flex;
        align-items: flex-end;
    }
    ```
    <img src="pics\15.png" width="400">

6. Направь лягушонка в центр пруда, используя justify-content и align-items вместе.

    <img src="pics\06.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```
    <img src="pics\16.png" width="400">

7. Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них.
    <img src="pics\07.png" width="400">

    ```css
    #pond {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
    }
    ```
    <img src="pics\17.png" width="400">

8. Лягушатам нужно выстроиться в порядке их лилий используя flex-direction

    <img src="pics\08.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: row-reverse;
    }
    ```
    <img src="pics\18.png" width="400">

9. Помоги лягушатам расположиться на своих лилиях используя flex-direction

    <img src="pics\09.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: column;
    }
    ```
    <img src="pics\19.png" width="400">

10. Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, все же придется применить и flex-direction и justify-content, чтоб поместить их на свои лилии.

    <img src="pics\010.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
    ```
    <img src="pics\110.png" width="400">

11. Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.

    <img src="pics\011.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    ```
    <img src="pics\111.png" width="400">

12. Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.

    <img src="pics\012.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    ```
    <img src="pics\112.png" width="400">

13. Помоги лягушатам найти их лилии с помощью flex-direction, justify-content и align-items.

    <img src="pics\013.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: flex-end;
    }
    ```
    <img src="pics\113.png" width="400">

14. Используй свойство order, чтоб разместить лягушат на своих лилиях.

    <img src="pics\014.png" width="400">

    ```css
    #pond {
        display: flex;
    }

    .yellow {
        order: 1;
    }
    ```
    <img src="pics\114.png" width="400">

15. Используй свойство order, чтоб отправить красного лягушонка на его лилию.

    <img src="pics\015.png" width="400">

    ```css
    #pond {
        display: flex;
    }

    .red {
        order: -1;
    }
    ```
    <img src="pics\115.png" width="400">

16. Еще одно свойство, которое ты можешь применить к определенному элементу это align-self.

    <img src="pics\016.png" width="400">

    ```css
    #pond {
        display: flex;
    }

    .yellow {
        align-self: flex-end;
    }
    ```
    <img src="pics\116.png" width="400">

17. Используй order и align-self вместе, чтоб помочь лягушатам добраться к своим целям.

    <img src="pics\017.png" width="400">

    ```css
    #pond {
        display: flex;
    }

    .yellow {
        order: 1;
        align-self: flex-end;
    }
    ```
    <img src="pics\117.png" width="400">

18. О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства flex-wrap.

    <img src="pics\018.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-wrap: wrap;
    }
    ```
    <img src="pics\118.png" width="400">

19. Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации flex-direction и flex-wrap.

    <img src="pics\019.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    ```
    <img src="pics\119.png" width="400">

20. Попробуй использовать flex-flow, чтоб повторить предыдущий уровень.

    <img src="pics\019.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-flow: column wrap;
    }
    ```
    <img src="pics\119.png" width="400">

21. Лягушат раскидало по всему пруду, но лилии сгруппированы в верхней части. Ты можешь использовать align-content, чтобы указать, как несколько рядов должны отделяться друг от друга.

    <img src="pics\021.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    ```
    <img src="pics\121.png" width="400">

22. Теперь течение сгруппировало лилии в нижней части. Используй align-content, чтоб направить лягушат туда.

    <img src="pics\022.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-end;
    }
    ```
    <img src="pics\122.png" width="400">

23. Лягушата были на вечеринке, но уже пора возвращаться домой. Используй комбинацию flex-direction и align-content, чтоб отправить их к своим лилиям.

    <img src="pics\023.png" width="400">

    ```css
    #pond {
        display: flex;
        flex-direction: column-reverse;
        align-content: center;
    }
    ```
    <img src="pics\123.png" width="400">

24. Доставь лягушат по домам в последний раз, используя CSS свойства, которые ты выучил:

    <img src="pics\024.png" width="400">

    ```css
    #pond {
        display: flex;
        justify-content: center;
        flex-flow: column-reverse wrap-reverse;
        align-content: space-between;
    }
    ```
    <img src="pics\124.png" width="400">


<img src="pics\1fin.png" width="1000">

## CSS DINNER

1. plate
2. bento
03. #fancy
04. plate > apple
05. #fancy pickle
06. .small
07. orange.small
08. bento > orange.small
09. plate, bento
10. \*
11. orange.small, pickle, plate > apple
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. plate orange:first-child
16. plate *:only-child
17. #fancy *:last-child , plate + pickle
18. plate:nth-child(3)
19. bento:nth-last-child(3)
20. apple:first-of-type
21. plate:nth-of-type(2n)
22. plate:nth-of-type(2n+3)
23. plate apple.small:only-of-type
24. orange:last-of-type , apple:last-of-type
25. bento:empty
26. apple:not(.small)
27. [for]
28. plate[for]
29. [for="Vitaly"]
30. [for^="Sa"]
31. [for$="ato"]
32. [for*="obb"]


<img src="pics\2fin.png" width="1000">