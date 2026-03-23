1. La manipulation du DOM via les classes
J'ai appris que pour modifier l'affichage, il ne faut pas changer le style directement en JS (pas de .style), mais plutôt ajouter ou retirer des classes CSS avec classList.add ou toggle. C'est le CSS qui garde la main sur l'apparence, le JS ne fait que donner le signal.

2. L'importance de l'accessibilité
Le code ne doit pas juste "marcher" visuellement, il doit aussi être compréhensible par les lecteurs d'écran. L'utilisation de aria-expanded pour le menu ou aria-hidden pour la modale permet d'informer l'utilisateur de l'état du composant.

3. Le Plan Interactif de la Page
Pour l'accordéon de la FAQ, on ne peut pas sélectionner un seul élément. J'ai utilisé querySelectorAll et une boucle forEach pour appliquer un écouteur de clic sur chaque question en une seule fois.

<!-- Si aucune IA n'a été utilisée, remplacez tout le bloc ci-dessus par :
"Aucune IA utilisée lors de cette séance." -->