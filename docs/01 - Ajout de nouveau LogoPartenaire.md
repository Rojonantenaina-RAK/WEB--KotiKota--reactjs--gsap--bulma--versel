### Ajout d’un logo partenaire

- Placer le logo dans :  
  `/src/Assets/Logos/`

- Dans le fichier `/src/Main.js` :  
  * Importer le logo :
    ```javascript
    import newLogo from './../../Assets/Logos/newLogo.png';
    ```

  * Ajouter le logo dans la **Section 3 : partenaires** :
    ```html
    <!-- div className='cell' Précédentes ... -->
    <div className="cell"><img src={newLogo} alt="DescriptionDuLogo" /></div>
    ```
