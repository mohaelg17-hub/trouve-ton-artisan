USE artisan;

-- 1. Insertion des 4 catégories
INSERT INTO categorie (nom) VALUES
('Bâtiment'),
('Services'),
('Fabrication'),
('Alimentation');

-- 2. Insertion des spécialités, chacune reliée à sa catégorie
INSERT INTO specialite (nom, categorie_id) VALUES
('Chauffagiste', (SELECT id FROM categorie WHERE nom = 'Bâtiment')),
('Menuisier',    (SELECT id FROM categorie WHERE nom = 'Bâtiment')),
('Electricien',  (SELECT id FROM categorie WHERE nom = 'Bâtiment')),
('Plombier',     (SELECT id FROM categorie WHERE nom = 'Bâtiment')),
('Fleuriste',    (SELECT id FROM categorie WHERE nom = 'Services')),
('Webdesign',    (SELECT id FROM categorie WHERE nom = 'Services')),
('Coiffeur',     (SELECT id FROM categorie WHERE nom = 'Services')),
('Toiletteur',   (SELECT id FROM categorie WHERE nom = 'Services')),
('Bijoutier',    (SELECT id FROM categorie WHERE nom = 'Fabrication')),
('Ferronier',    (SELECT id FROM categorie WHERE nom = 'Fabrication')),
('Couturier',    (SELECT id FROM categorie WHERE nom = 'Fabrication')),
('Traiteur',     (SELECT id FROM categorie WHERE nom = 'Alimentation')),
('Boulanger',    (SELECT id FROM categorie WHERE nom = 'Alimentation')),
('Chocolatier',  (SELECT id FROM categorie WHERE nom = 'Alimentation')),
('Boucher',      (SELECT id FROM categorie WHERE nom = 'Alimentation'));

-- 3. Insertion des artisans et de sa spécialité 
INSERT INTO artisan (nom, ville, note, a_propos, email, site_web, top, specialite_id) VALUES
('Boucherie Dumont', 'Lyon', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, FALSE, (SELECT id FROM specialite WHERE nom = 'Boucher')),
('Au pain chaud', 'Montélimar', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, TRUE, (SELECT id FROM specialite WHERE nom = 'Boulanger')),
('Chocolaterie Labbé', 'Lyon', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, (SELECT id FROM specialite WHERE nom = 'Chocolatier')),
('Traiteur Truchon', 'Lyon', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, (SELECT id FROM specialite WHERE nom = 'Traiteur')),
('Orville Salmons', 'Evian', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, TRUE, (SELECT id FROM specialite WHERE nom = 'Chauffagiste')),
('Mont Blanc Eléctricité', 'Chamonix', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, (SELECT id FROM specialite WHERE nom = 'Electricien')),
('Boutot & fils', 'Bourg-en-bresse', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, (SELECT id FROM specialite WHERE nom = 'Menuisier')),
('Vallis Bellemare', 'Vienne', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, (SELECT id FROM specialite WHERE nom = 'Plombier')),
('Claude Quinn', 'Aix-les-bains', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, FALSE, (SELECT id FROM specialite WHERE nom = 'Bijoutier')),
('Amitee Lécuyer', 'Annecy', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, (SELECT id FROM specialite WHERE nom = 'Couturier')),
('Ernest Carignan', 'Le Puy-en-Velay', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, FALSE, (SELECT id FROM specialite WHERE nom = 'Ferronier')),
('Royden Charbonneau', 'Saint-Priest', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, FALSE, (SELECT id FROM specialite WHERE nom = 'Coiffeur')),
('Leala Dennis', 'Chambéry', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, (SELECT id FROM specialite WHERE nom = 'Coiffeur')),
('C''est sup''hair', 'Romans-sur-Isère', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, (SELECT id FROM specialite WHERE nom = 'Coiffeur')),
('Le monde des fleurs', 'Annonay', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, (SELECT id FROM specialite WHERE nom = 'Fleuriste')),
('Valérie Laderoute', 'Valence', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, FALSE, (SELECT id FROM specialite WHERE nom = 'Toiletteur')),
('CM Graphisme', 'Valence', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, (SELECT id FROM specialite WHERE nom = 'Webdesign'));