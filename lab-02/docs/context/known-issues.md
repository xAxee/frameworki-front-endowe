# Znane ograniczenia

## Produkt

- Brak znanych błędów w zweryfikowanym zakresie zadań 1–5.
- Dane istnieją wyłącznie w pamięci; odświeżenie przywraca trzy zadania początkowe. localStorage to osobne zadanie domowe.
- Newsletter jest demonstracją formularza niekontrolowanego, bez integracji serwerowej.
- Date.now() spełnia wymaganie laboratorium, ale nie gwarantuje unikalności przy tworzeniu kilku zadań w tej samej milisekundzie.

## Weryfikacja i środowisko

- Projekt nie zawiera frameworka testów jednostkowych ani skryptu lint. Nie dodawano nowych zależności testowych.
- 24 sprawdzenia wykonano automatycznie w przeglądarce; dla przycisków i checkboxów użyto dispatchEvent, dla pól również fill, blur i press.
- Początkowe próby testów przerwało zamknięcie sesji przeglądarki i serwera; po ponownym uruchomieniu testy zakończyły się powodzeniem.
- Git może ostrzegać o konwersji LF na CRLF na Windows; nie blokuje to kompilacji.