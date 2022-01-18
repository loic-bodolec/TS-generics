## TypeScript - Les types génériques

- Un type générique permet d'écrire une fonction compatible avec différents types tout en conservant les informations de celui-ci.
- Il est souvent noté <T>.
- Lorsqu'on a déjà le paramètre avec lequel on veut appeler notre fonction, on peut utiliser l'inférence de types.
- On peut aussi spécifier manuellement le type que doit prendre notre type générique avec la syntaxe const [persons, setPersons] = useState<Person[]>([]);.

<https://www.typescriptlang.org/docs/handbook/2/generics.html>
