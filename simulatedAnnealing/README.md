# Simulated Annealing :exclamation:

## 1 Introducción
 El Recocido Simulado (SA) es uno de los métodos meta-heurísticos más sencillos y conocidos para abordar la difícil optimización global de caja negra.
heurístico para abordar los difíciles problemas de optimización global de caja negra (aquellos cuya función objetivo no está dada explícitamente y sólo puede evaluarse mediante una costosa simulación informática).  

## Conceptos básicos

A principios de los años 80, tres investigadores de IBM, Kirkpatrick, Gelatt y Vecchi [12] introdujeron los conceptos de recocido en la optimización combinatoria. Estos conceptos   se basan en una fuerte analogía con el recocido físico de los materiales. Este proceso consiste en llevar un sólido a un estado de baja energía tras
 después de aumentar su temperatura. Se puede resumir en las dos etapas siguientes
 
- Llevar el sólido a una temperatura muy alta hasta la "fusión" de la estructura;
- Enfriar el sólido según un esquema muy particular de disminución de la temperatura para alcanzar un estado sólido de mínima energía.


En la fase líquida, las partículas se distribuyen al azar. Se ha demostradoque el estado de energía mínima se alcanza siempre que la temperatura inicial sea lo suficientemente alta y el tiempo de enfriamiento sea lo suficientemente largo.

Si no es así, el sólido se encontrará en un estado metaestable con energía no mínima; esto se denomina endurecimiento, que consiste en el enfriamiento repentino
de un sólido.👨‍🚀

![Figura 1](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama1.PNG)

Figura 1: Cuando la temperatura es alta, el material se encuentra en estado líquido (izquierda). En un proceso de endurecimiento, el material alcanza un estado sólido con energía no mínima (estado metaestable; arriba a la derecha). En este caso, la estructura de los átomos no tiene simmetría. Durante un proceso de recocido lento, el material alcanza también un estado sólido pero en el que los átomos se organizan con simetría (cristal; abajo a la derecha).

❗ Antes de describir el algoritmo de recocido simulado para la optimización necesitamos introducir los principios de los algoritmos de optimización de búsqueda local, de los cuales el recocido simulado es una extensión.

### ⭐ 2.1 Local search (or Monte Carlo) algorithms

Estos algoritmos optimizan la función de coste explorando la vecindad del punto actual en el espacio de soluciones.

En las siguientes definiciones consideramos (S, f ) una instanciación de un problema de optimización combinatoria (S: conjunto de soluciones factibles, f : función objetivo). 
 
 🎈 Acontinuación se muestran la definiciones formales sin traducción
 
 ![Figura 2](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama2.PNG)
 ![Figura 4](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama4.PNG)
 
 Un algoritmo de búsqueda local es un algoritmo iterativo que comienza su búsqueda desde un punto factible, dibujado aleatoriamente en el espacio de estados. A continuación, se aplica sucesivamente un mecanismo de generación para encontrar una solución mejor (en términos de valor de la función objetivo), explorando la vecindad de la solución actual. Si se encuentra dicha solución, se convierte en la solución actual. El algoritmo finaliza cuando no se encuentra ninguna mejora, y la solución actual se considera la solución aproximada del problema de optimización. Se puede resumir el algoritmo con el siguiente pseudocódigo para un problema de minimización:
 
![Figura 3](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama3.PNG)
![Figura 5](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama5.PNG)

Así, por definición, los algoritmos de búsqueda local convergen a los óptimos locales a menos que se tenga una estructura de vecindad exacta. Esta noción de vecindad exacta es teórica porque en la práctica suele llevar a recurrir a una enumeración completa del espacio de búsqueda.
 
Intuitivamente, si la solución actual "cae" en un subdominio sobre el que la función objetivo es convexa, el algoritmo queda atrapado en este sub-dominio, a menos que la estructura de vecindad asociada con el mecanismo de generación pueda alcanzar puntos fuera de este subdominio.
Para evitar quedar atrapado en mínimos locales, es necesario entonces definir un proceso susceptible de aceptar transiciones de estado actuales que reduzcan momentáneamente el rendimiento (en términos de objetivo) de la solución actual: este es el principio fundamental de la función de recocido simulado, tal que antes de describir este algoritmo, es necesario introducir el algoritmo de Metrópolis [15] que es un componente básico de SA.


### ⭐ 2.2 Metropolis Algorithm

En 1953, tres investigadores estadounidenses (Metropolis, Rosenbluth y Teller [15]) desarrollaron un algoritmo para simular el recocido físico, como se describe en
sección 2. Su objetivo era reproducir fielmente la evolución de la estructura física de un material sometido a recocido.

Este algoritmo se basa en técnicas de Monte Carlo, que consiste en generar una secuencia de estados de del sólido de la siguiente manera.

Partiendo de un estado inicial i de energía Ei, se genera un nuevo estado j de energía E j generada modificando la posición de una partícula. Si la diferencia de energía, Ei - E j, es positiva (el nuevo estado presenta menor energía), el estado j se convierte en el nuevo estado actual. Si la diferencia de energía es menor o igual a cero, la probabilidad de que el estado j se convierta en el estado actual viene dada por:

![Figura 6](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama6.PNG)

donde T representa la temperatura del sólido y kB es la constante de Boltzman (kB = 1,38 × 10-23 joule/Kelvin).
El criterio de aceptación del nuevo estado se denomina criterio de Metrópolis. Si el enfriamiento se realiza con suficiente lentitud, el sólido alcanza un estado de equilibrio a cada temperatura dada T . En el algoritmo de Metropolis este equilibrio se consigue generando un gran número de transiciones a
cada temperatura. El equilibrio térmico se caracteriza por la distribución estadística de Boltzmann. Esta distribución da la probabilidad de que el sólido se encuentre en el estado i de energía Ei a la temperatura T :

![Figura 7](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama7.PNG)

donde X es una variable aleatoria asociada al estado actual del sólido y Z(T ) es un coeficiente de normalización, definido como:
![Figura 8](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama8.PNG)

### ⭐ 2.3 Simulated annealing (SA) algorithm

En el algoritmo SA, se aplica el algoritmo de Metrópolis para generar una secuencia de soluciones en el espacio de estados S. Para ello, se hace una analogía entre un sistema multipartícula y nuestro problema de optimización utilizando las siguientes equivalencias:

- Los puntos del espacio de estados representan los posibles estados del sólido;
- La función a minimizar representa la energía del sólido.

A continuación, se introduce un parámetro de control c, que actúa como temperatura. Este parámetro se expresa con las mismas unidades que el objetivo que se optimiza. También se supone que el usuario proporciona para cada punto del espacio de estados, una vecindad y un mecanismo para generar una solución en esta vecindad. A continuación, definimos el principio de aceptación :

![Figura 9](https://github.com/armaFab/metaheuristicas/blob/main/simulatedAnnealing/images/diagrama9.PNG)



    


