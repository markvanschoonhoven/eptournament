-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 05 mei 2020 om 21:09
-- Serverversie: 10.4.8-MariaDB
-- PHP-versie: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db-tst-tournamentmanager`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `date_tournament`
--

CREATE TABLE `date_tournament` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `date_tournament` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `date_tournament`
--

INSERT INTO `date_tournament` (`id`, `tournament_id`, `date_tournament`) VALUES
(1, 8, '2020-02-08'),
(2, 9, '2020-02-29');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `divisions`
--

CREATE TABLE `divisions` (
  `id` int(11) NOT NULL,
  `division` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `divisions`
--

INSERT INTO `divisions` (`id`, `division`) VALUES
(1, 'Jeugd t/m 8 jaar'),
(2, 'Jongens t/m 12 jaar'),
(3, 'Meisjes t/m 12 jaar');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `division_tournament`
--

CREATE TABLE `division_tournament` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `division_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `division_tournament`
--

INSERT INTO `division_tournament` (`id`, `tournament_id`, `division_id`) VALUES
(1, 9, 3),
(2, 8, 1),
(3, 8, 3),
(4, 9, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `fields`
--

CREATE TABLE `fields` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `fields`
--

INSERT INTO `fields` (`id`, `name`) VALUES
(1, 'Hoofdveld'),
(2, 'Trainingsveld'),
(3, 'Kunstgrasveld'),
(4, 'Veld A'),
(5, 'Veld B'),
(6, 'Veld C');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `field_tournament`
--

CREATE TABLE `field_tournament` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `field_tournament`
--

INSERT INTO `field_tournament` (`id`, `tournament_id`, `field_id`) VALUES
(1, 8, 1),
(2, 9, 2);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `referee_id` int(11) NOT NULL,
  `team1_id` int(11) NOT NULL,
  `team2_id` int(11) NOT NULL,
  `field_id` int(11) NOT NULL,
  `time` time NOT NULL,
  `score_team1` int(11) NOT NULL,
  `score_team2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `games`
--

INSERT INTO `games` (`id`, `tournament_id`, `referee_id`, `team1_id`, `team2_id`, `field_id`, `time`, `score_team1`, `score_team2`) VALUES
(1, 8, 6, 2, 3, 1, '12:00:00', 0, 0),
(2, 8, 5, 1, 2, 2, '13:00:00', 0, 0),
(3, 8, 4, 1, 2, 1, '14:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `team_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `players`
--

INSERT INTO `players` (`id`, `team_id`, `name`, `age`, `photo`) VALUES
(1, 2, 'Persoon 1', 10, 'persoon1.jpg'),
(2, 2, 'Persoon 2', 10, 'persoon2.jpg'),
(3, 2, 'Persoon 3', 10, 'persoon3.jpg'),
(4, 2, 'Persoon 4', 10, 'persoon4.jpg'),
(5, 2, 'Persoon 5', 10, 'persoon5.jpg'),
(6, 3, 'Naam 1', 12, 'naam1.jpg'),
(7, 3, 'Naam 2', 12, 'naam2.jpg'),
(8, 3, 'Naam 3', 12, 'naam3.jpg'),
(9, 3, 'Naam 4', 12, 'naam4.jpg'),
(10, 3, 'Naam 5', 12, 'naam5.jpg');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `referees`
--

CREATE TABLE `referees` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `referees`
--

INSERT INTO `referees` (`id`, `name`) VALUES
(1, 'Van de Beek'),
(2, 'Blom'),
(3, 'Janssen'),
(4, 'Van Schoonhoven'),
(5, 'Hoeksma'),
(6, 'Bergwijn'),
(7, 'Luinge');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `referee_tournament`
--

CREATE TABLE `referee_tournament` (
  `id` int(11) NOT NULL,
  `toernooi_id` int(11) NOT NULL,
  `scheidsrechter_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `referee_tournament`
--

INSERT INTO `referee_tournament` (`id`, `toernooi_id`, `scheidsrechter_id`) VALUES
(1, 8, 5),
(2, 9, 6),
(3, 8, 5);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `tournament_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(100) NOT NULL,
  `points` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `teams`
--

INSERT INTO `teams` (`id`, `tournament_id`, `name`, `logo`, `points`) VALUES
(1, 8, 'SV Landgraaf', 'team1.jpg', 0),
(2, 9, 'Sportclub Heerlen', 'heerlensport.jpg', 0),
(3, 8, 'SV Welten', 'Welten.jpg', 0),
(4, 10, 'Patricia SV', 'patricia.jpg', 0),
(5, 8, 'Sportclub Heksenberg', 'heksenberg.jpg', 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `tournaments`
--

CREATE TABLE `tournaments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `matchduration` int(11) NOT NULL,
  `intermission` int(11) NOT NULL,
  `points_win` int(11) NOT NULL,
  `points_draw` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `tournaments`
--

INSERT INTO `tournaments` (`id`, `name`, `matchduration`, `intermission`, `points_win`, `points_draw`) VALUES
(8, 'Jeugd-winter toernooi', 90, 5, 3, 1),
(9, 'Nieuwjaars Toernooi', 30, 10, 3, 2),
(10, 'Trail Tournooi', 90, 5, 3, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'mark', 'voetbal');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `date_tournament`
--
ALTER TABLE `date_tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`);

--
-- Indexen voor tabel `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `division_tournament`
--
ALTER TABLE `division_tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `division_id` (`division_id`);

--
-- Indexen voor tabel `fields`
--
ALTER TABLE `fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `field_tournament`
--
ALTER TABLE `field_tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `field_tournament2` (`field_id`);

--
-- Indexen voor tabel `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tournament_id` (`tournament_id`),
  ADD KEY `referee_id` (`referee_id`),
  ADD KEY `team1_id` (`team1_id`),
  ADD KEY `team2_id` (`team2_id`),
  ADD KEY `field_id` (`field_id`);

--
-- Indexen voor tabel `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Indexen voor tabel `referees`
--
ALTER TABLE `referees`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `referee_tournament`
--
ALTER TABLE `referee_tournament`
  ADD PRIMARY KEY (`id`),
  ADD KEY `toernooi_id` (`toernooi_id`),
  ADD KEY `scheidsrechter_id` (`scheidsrechter_id`);

--
-- Indexen voor tabel `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Teams` (`tournament_id`);

--
-- Indexen voor tabel `tournaments`
--
ALTER TABLE `tournaments`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `date_tournament`
--
ALTER TABLE `date_tournament`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `division_tournament`
--
ALTER TABLE `division_tournament`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT voor een tabel `fields`
--
ALTER TABLE `fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT voor een tabel `field_tournament`
--
ALTER TABLE `field_tournament`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT voor een tabel `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT voor een tabel `referees`
--
ALTER TABLE `referees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT voor een tabel `referee_tournament`
--
ALTER TABLE `referee_tournament`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT voor een tabel `tournaments`
--
ALTER TABLE `tournaments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `date_tournament`
--
ALTER TABLE `date_tournament`
  ADD CONSTRAINT `data_tournament` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`);

--
-- Beperkingen voor tabel `division_tournament`
--
ALTER TABLE `division_tournament`
  ADD CONSTRAINT `division_tournament1` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`);

--
-- Beperkingen voor tabel `field_tournament`
--
ALTER TABLE `field_tournament`
  ADD CONSTRAINT `field-tournament1` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`),
  ADD CONSTRAINT `field_tournament2` FOREIGN KEY (`field_id`) REFERENCES `fields` (`id`);

--
-- Beperkingen voor tabel `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_1` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`),
  ADD CONSTRAINT `games_2` FOREIGN KEY (`referee_id`) REFERENCES `referees` (`id`),
  ADD CONSTRAINT `games_3` FOREIGN KEY (`team1_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `games_4` FOREIGN KEY (`team2_id`) REFERENCES `teams` (`id`),
  ADD CONSTRAINT `games_5` FOREIGN KEY (`field_id`) REFERENCES `fields` (`id`);

--
-- Beperkingen voor tabel `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players` FOREIGN KEY (`team_id`) REFERENCES `teams` (`id`);

--
-- Beperkingen voor tabel `referee_tournament`
--
ALTER TABLE `referee_tournament`
  ADD CONSTRAINT `referee_tournament_1` FOREIGN KEY (`toernooi_id`) REFERENCES `tournaments` (`id`),
  ADD CONSTRAINT `referee_tournament_2` FOREIGN KEY (`scheidsrechter_id`) REFERENCES `referees` (`id`);

--
-- Beperkingen voor tabel `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `Teams` FOREIGN KEY (`tournament_id`) REFERENCES `tournaments` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
