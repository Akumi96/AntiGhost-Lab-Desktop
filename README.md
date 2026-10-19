# AntiGhost-Lab-Desktop
Free and open-source keyboard anti-ghosting and key rollover testing tool for Windows. Test simultaneous key presses, compare keyboards, and export results.

# AntiGhost Lab Desktop

AntiGhost Lab Desktop is a free keyboard testing tool for Windows, built with Electron.

I started this project because I wanted to compare two keyboards and find out how well they handle multiple keys being pressed at the same time. Instead of relying only on manufacturer specifications, I wanted a simple way to run the same tests on both keyboards and compare the results.

The application lets you monitor key presses in real time, test different key combinations, and save the results for later comparison.

## Features

- Real-time key press detection.
- Simultaneous key press counter.
- Guided tests with predefined key combinations.
- Custom key combinations.
- Test history and keyboard comparison.
- Automatic saving of completed tests.
- Export results to JSON or CSV.
- Portable Windows application.

## Download

You can download the Windows version from the [Releases](../../releases) page.

Download the `.exe` file and run it. You don't need to install Node.js or Chrome.

Windows may display a SmartScreen warning because the application isn't digitally signed.

## How to use

1. Open AntiGhost Lab Desktop.
2. Enter the name of the keyboard you're testing.
3. Start the key capture or select one of the guided tests.
4. Press the requested key combinations.
5. Review the results and repeat the tests with another keyboard.

For more consistent comparisons, use the same computer, keyboard layout, and test combinations.

## Building from source

You'll need [Node.js](https://nodejs.org/) installed.

Clone the repository and install the dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

To generate the Windows executable, use the included `CREAR_EXE_WINDOWS.bat` file.

## Limitations

AntiGhost Lab can only detect keyboard events received by the application. It cannot directly examine a keyboard's internal hardware or electrical matrix.

Some shortcuts are handled by Windows and cannot be blocked by the application. Because of this, certain combinations may not be testable.

The results are useful for comparing keyboard behavior, but they shouldn't be treated as a certified hardware test.

## Privacy

Test results are stored locally. The application doesn't require an account or an internet connection to perform tests.

## Español

AntiGhost Lab Desktop es una herramienta gratuita para Windows que permite probar cuántas teclas puede registrar un teclado al mismo tiempo.

Creé este proyecto para comparar dos teclados y comprobar cómo responden al presionar distintas combinaciones, especialmente las que se utilizan al jugar.

Con la aplicación puedes ver las teclas detectadas en tiempo real, realizar pruebas guiadas, guardar resultados y comparar diferentes teclados.

### Cómo usarlo

1. Descarga el ejecutable desde [Releases](../../releases).
2. Abre el programa e ingresa el nombre de tu teclado.
3. Inicia la captura o selecciona una prueba.
4. Presiona las combinaciones indicadas.
5. Revisa los resultados y repite las pruebas con otro teclado.

### Importante

El programa detecta las pulsaciones que recibe Windows, pero no puede analizar directamente el circuito interno del teclado.

Algunos atajos del sistema operativo tampoco pueden bloquearse, por lo que ciertas combinaciones no podrán evaluarse correctamente.

## License

Distributed under the MIT License. See `LICENSE` for details.
