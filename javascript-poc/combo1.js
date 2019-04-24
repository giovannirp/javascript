<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>javascript</title>
</head>

<body>

    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        </thead>
        <tbody>
            <tr class="pessoa">
                <td class="nome">Breno</td>
                <td class="idade">19</td>
            </tr>
            <tr class="pessoa">
                <td class="nome">Maya</td>
                <td class="idade">15</td>
            </tr>
            <tr class="pessoa">
                <td class="nome">Fernanda</td>
                <td class="idade">22</td>
            </tr>
        </tbody>
        <tfoot>
            <td>Total idades</td>
            <td colspan="2" class="total"> ???</td>
        </tfoot>
    </table>


    <script>

       const $ = document.querySelectorAll.bind(document);
       $('.total')[0].textContent = 
        [...$('.idade')]
            .map(td => parseInt(td.textContent))
            .filter(idade => idade >= 18)
            .reduce((total, idade) => total + idade, 0)

    </script>

</body>

</html>