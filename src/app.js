angular
    .module('recipe-app', [])
    .controller('RecipeController', ['$scope', function ($scope) {
        $scope.recipe = {
            "recipe": {
                "title": "bla",
                ingredients:
                    [
                        //maps of ingridients
                        {
                            "name": "sauce",
                            "ingredients": [
                                {
                                    "id/name": "123/bla2",
                                    "amount": 120,
                                    "unit": "g"
                                }
                            ]
                        },
                        {
                            "name": "dough",
                            "ingredients": [
                                {
                                    "id/name": "123/bla2",
                                    "amount": 120,
                                    "unit": "g"
                                }
                            ]
                        }
                    ],
                "instructions": [
                    {
                        "instruction": "do stuff",
                        "wait timer": 120,
                        "unit": "min"
                    },{
                        "instruction": "do stuff",
                        "wait timer": 120,
                        "unit": "min"
                    },{
                        "instruction": "do stuff",
                        "wait timer": 120,
                        "unit": "min"
                    }
                ]
            }
        }.recipe;
    }])
    .directive('recipe', function () {
        return {
            controller: 'RecipeController',
            scope: {
                // recipe: '=recipe'
            },
            template:
            "<div class='container-fluid'>" +
                "<h3>{{recipe.title}}</h3>" +
                "<div class='row' >" +
                    "<div class='ingredients col-xs-12 col-md-3'>" +
                        "<div class='panel panel-default'>" +
                            "<div class='panel-heading'>Zutaten</div>" +
                            "<div class='panel-body'>" +
                                "<div  ng-repeat='list in recipe.ingredients'>" +
                                    "<div class='ingredientList'>" +
                                        "<strong>{{list.name}}</strong>" +
                                        "<ul ng-repeat='item in list.ingredients'>" +
                                            "<li>{{item['id/name']}}: {{item.amount}}{{item.unit}}</li>" +
                                        "</ul>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='col-xs-12 col-md-9'>" +
                        "<ul ng-repeat='step in recipe.instructions'>" +
                            "<li>{{step.instruction}}</li>" +
                        "</ul>" +
                    "</div>" +
                "</div>" +
            "</div>"

        };
    });
