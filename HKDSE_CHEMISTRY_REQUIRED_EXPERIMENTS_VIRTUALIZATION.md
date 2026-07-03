# HKDSE Chemistry Required Experiments to Virtual Experiences

## Purpose

This document lists the core Hong Kong DSE Chemistry practical experiments and practical-skill experiences that should be represented in the Chemistry Virtual Lab.

The goal is not only to show a simple animation. Each virtual experiment should include:

- correct apparatus setup
- realistic relative apparatus size
- textures and material surfaces
- clear labels
- correct chemical contents
- liquids, solids, gases and particles
- color changes
- bubbles, vapors, precipitates, flame colors or deposits where relevant
- equations
- observations
- graph or data table where relevant
- DSE-style conclusion and error analysis
- safety and odor notes where relevant

## 3D Model Standard

Every chemistry 3D scene should follow these modelling rules.

### Scale

Use realistic relative scale, even if not exact millimeter CAD.

| Object | Suggested relative size |
|---|---:|
| Test tube | height 1.4 units, radius 0.14 units |
| Boiling tube | height 1.8 units, radius 0.20 units |
| Beaker 100 cm3 | height 1.0 unit, radius 0.42 units |
| Conical flask 250 cm3 | height 1.25 units, base radius 0.48 units |
| Burette 50 cm3 | height 3.8 units, radius 0.08 units |
| Pipette 25 cm3 | height 2.2 units, radius 0.05 units, center bulb 0.18 units |
| Measuring cylinder | height 1.8 units, radius 0.18 units |
| Filter funnel | cone height 0.55 units, top radius 0.38 units |
| Watch glass | radius 0.42 units, shallow curved surface |
| Evaporating dish | radius 0.46 units, shallow bowl |
| Bunsen burner | base 0.45 units, barrel height 0.75 units |
| Tripod | height 0.85 units, three legs |
| Delivery tube | radius 0.03 units, curved tube path |
| Gas syringe | barrel length 1.8 units, radius 0.18 units, plunger position variable |
| Power supply | box 0.9 x 0.5 x 0.45 units |
| Carbon electrode | height 1.4 units, radius 0.05 units |

### Textures

Use procedural or asset textures for:

- transparent glass with slight blue tint
- matte ceramic for evaporating dish and crucible
- brushed metal for clamps, tripod, electrodes and wire
- rough charcoal/carbon electrode surface
- rubber tubing with dark matte texture
- bench surface with subtle speckled texture
- liquid surface with reflection and slight motion
- precipitate as cloudy suspended particles
- crystals as faceted small solids
- rust as rough orange-brown patches

### Labels

Every apparatus scene should label:

- apparatus names
- reagent names
- concentration or condition if relevant
- electrode polarity if relevant
- gas product if relevant
- direction of electron/ion/gas/liquid flow
- equation or half-equation
- safety/odor warning where relevant

### Particle View

Each virtual experiment should support either:

- an always-visible particle/effect layer, or
- a toggle between macroscopic view and particle view.

Particle view should show:

- ions moving in solution
- electrons moving through external circuits
- gas molecules escaping as bubbles
- precipitate particles forming
- indicator particles changing color
- catalyst surface sites
- collision frequency in rate experiments

## Chapter 1: Planet Earth

### 1.1 Separating Mixtures: Filtration

Virtual experience:

- Students assemble beaker, filter funnel, filter paper, conical flask and glass rod.
- Mixture contains solid particles suspended in liquid.
- Liquid passes through filter paper into flask.
- Solid residue remains on filter paper.

Required 3D content:

- beaker with cloudy liquid
- funnel with folded filter paper texture
- conical flask receiving filtrate
- suspended solid particles
- drip animation
- residue buildup on filter paper

Equation:

```text
No chemical reaction: separation by particle size
```

DSE focus:

- residue vs filtrate
- why filtration cannot separate dissolved solute
- correct pouring using glass rod

### 1.2 Separating Mixtures: Evaporation and Crystallization

Virtual experience:

- Students heat salt solution in an evaporating dish.
- Solvent level drops.
- Crystals appear as solution becomes saturated.

Required 3D content:

- evaporating dish
- Bunsen burner, tripod, wire gauze
- colorless or pale solution
- steam/vapor effect
- crystal particles forming at edge and base
- heat shimmer

Equation:

```text
Salt(aq) -> Salt(s) after solvent evaporation
```

DSE focus:

- do not heat to complete dryness for crystallization
- saturated solution and crystal formation

### 1.3 Separating Mixtures: Simple Distillation

Virtual experience:

- Students separate solvent from solution.
- Vapor rises, condenses, and collects as distillate.

Required 3D content:

- round-bottom flask
- thermometer
- condenser with water in/out labels
- receiver flask
- heat source
- vapor particles
- condensed liquid droplets

Equation:

```text
No chemical reaction: separation by boiling point
```

DSE focus:

- thermometer bulb position
- cooling water enters from lower end
- distillate is the more volatile component

### 1.4 Separating Mixtures: Fractional Distillation

Virtual experience:

- Students separate miscible liquids with different boiling points.
- Fractionating column shows repeated vaporization-condensation.

Required 3D content:

- fractionating column with beads or plates
- temperature readout
- colored vapor bands
- receiver flask
- graph of temperature vs time

Equation:

```text
No chemical reaction: separation by boiling point difference
```

DSE focus:

- fractional distillation vs simple distillation
- temperature plateau interpretation

### 1.5 Separating Mixtures: Paper Chromatography

Virtual experience:

- Students spot ink on baseline.
- Solvent rises.
- Pigments separate.
- Rf values are calculated.

Required 3D content:

- chromatography paper
- pencil baseline
- solvent level below baseline
- colored pigment spots
- solvent front label
- ruler scale

Equation:

```text
Rf = distance moved by spot / distance moved by solvent front
```

DSE focus:

- baseline must be above solvent
- pencil line, not ink
- interpreting chromatogram

### 1.6 Separating Funnel

Virtual experience:

- Students separate immiscible liquids.
- Lower layer is drained through tap.

Required 3D content:

- separating funnel with tap
- two colored liquid layers
- density labels
- receiving beaker
- draining stream animation

Equation:

```text
No chemical reaction: separation by immiscibility and density
```

DSE focus:

- identify upper/lower layer
- open stopper before draining
- avoid mixing at interface

## Chapter 2: Microscopic World I

### 2.1 Atomic Structure Model

Virtual experience:

- Students build atoms and ions from protons, neutrons and electrons.
- Electron shells fill according to simple DSE shell arrangement.

Required 3D content:

- nucleus with proton/neutron texture
- electron shells
- moving electrons
- isotope comparison panel
- charge label

Equation:

```text
Charge = number of protons - number of electrons
```

DSE focus:

- atomic number
- mass number
- isotopes
- electron arrangement

### 2.2 Ionic Bonding Model

Virtual experience:

- Students transfer electrons from metal to non-metal.
- Ions assemble into lattice.

Required 3D content:

- metal atom and non-metal atom
- electron transfer arrow
- cation and anion labels
- repeating ionic lattice
- melting and conductivity test modes

Equation example:

```text
Na -> Na+ + e-
Cl + e- -> Cl-
Na+ + Cl- -> NaCl
```

DSE focus:

- electron transfer
- full outer shell
- high melting point
- conductivity when molten or aqueous

### 2.3 Covalent Bonding Model

Virtual experience:

- Students share electron pairs to form molecules.

Required 3D content:

- atoms with outer-shell electrons
- shared electron pairs
- single, double and triple bond display
- bond labels
- polarity arrow where relevant

Equation example:

```text
H. + .H -> H:H
```

DSE focus:

- electron sharing
- molecular formula vs structural formula
- simple molecular properties

### 2.4 Metallic Bonding Model

Virtual experience:

- Students view metal cations in a sea of delocalized electrons.
- A stress slider shows layers sliding.

Required 3D content:

- regular metal ion lattice
- moving delocalized electrons
- malleability stress animation
- alloy impurity atoms

Equation:

```text
Metal atoms -> positive ions + delocalized electrons
```

DSE focus:

- conductivity
- malleability
- alloy strengthening

## Chapter 3: Metals

### 3.1 Reaction of Metals with Oxygen

Virtual experience:

- Students heat metals in air or oxygen.
- Metal oxide forms.

Required 3D content:

- crucible or combustion spoon
- Bunsen flame
- glowing metal surface
- oxide coating texture
- mass-change readout

Equation example:

```text
2Mg(s) + O2(g) -> 2MgO(s)
```

DSE focus:

- metal oxide formation
- reactivity comparison

### 3.2 Reaction of Metals with Water or Steam

Virtual experience:

- Students compare potassium, sodium, calcium, magnesium, zinc and copper behavior.

Required 3D content:

- water trough or steam tube
- metal sample
- bubbles for hydrogen
- flame test for hydrogen pop
- oxide layer formation for less reactive metals

Equation example:

```text
2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)
```

DSE focus:

- reactivity series
- hydrogen gas test
- safety with reactive metals

### 3.3 Reaction of Metals with Dilute Acid

Virtual experience:

- Students add metal to dilute acid and collect hydrogen.

Required 3D content:

- test tube or conical flask
- acid liquid
- metal granules
- gas syringe or inverted measuring cylinder
- bubbles
- hydrogen pop-test label

Equation example:

```text
Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)
```

DSE focus:

- metal-acid reaction rate
- gas collection
- reactivity comparison

### 3.4 Displacement Reaction

Virtual experience:

- Students place metal strips into metal salt solutions.
- More reactive metal displaces less reactive metal.

Required 3D content:

- test tubes with colored salt solutions
- metal strips
- surface deposit texture
- fading solution color
- ion exchange particle view

Equation example:

```text
Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)
```

DSE focus:

- reactivity series
- ionic equation
- observation of copper deposit

### 3.5 Rusting Conditions

Virtual experience:

- Students compare iron nails under dry air, boiled water, salt water and normal water.

Required 3D content:

- four labeled test tubes
- iron nails
- oil layer
- drying agent
- rust texture growth
- oxygen and water particle labels

Equation:

```text
Iron + oxygen + water -> hydrated iron(III) oxide
```

DSE focus:

- both oxygen and water are required
- salt speeds rusting
- control experiment design

### 3.6 Rust Prevention

Virtual experience:

- Students compare painting, oiling, galvanizing and sacrificial protection.

Required 3D content:

- iron samples
- coating layer
- zinc coating
- sacrificial metal strip
- rust-risk graph

Equation concept:

```text
More reactive metal oxidizes preferentially
```

DSE focus:

- barrier protection
- sacrificial protection
- galvanizing

## Chapter 4: Acids and Bases

### 4.1 pH and Indicator Tests

Virtual experience:

- Students add indicators to acids and alkalis.
- pH and color are shown.

Required 3D content:

- dropper bottle
- test tubes
- universal indicator color scale
- color-changing liquid
- pH meter

Equation:

```text
Acid produces H+(aq)
Alkali produces OH-(aq)
```

DSE focus:

- pH scale
- strong vs weak acid
- indicator color

### 4.2 Acid + Metal

Virtual experience:

- Students add magnesium or zinc to acid.
- Hydrogen is collected and tested.

Required 3D content:

- test tube/conical flask
- acid
- metal ribbon/granules
- bubbles
- delivery tube
- gas syringe

Equation example:

```text
Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)
```

DSE focus:

- salt and hydrogen product
- hydrogen test

### 4.3 Acid + Carbonate

Virtual experience:

- Students react carbonate with acid and test carbon dioxide.

Required 3D content:

- conical flask
- carbonate chips
- acid
- delivery tube
- limewater
- bubbles
- limewater turns milky

Equation example:

```text
CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + CO2(g) + H2O(l)
CO2(g) + Ca(OH)2(aq) -> CaCO3(s) + H2O(l)
```

DSE focus:

- carbon dioxide test
- gas collection
- word and chemical equation

### 4.4 Neutralization

Virtual experience:

- Students mix acid and alkali.
- Temperature and pH change.

Required 3D content:

- beaker or polystyrene cup
- thermometer
- acid/alkali liquids
- pH color transition
- heat glow for exothermic effect

Equation:

```text
H+(aq) + OH-(aq) -> H2O(l)
```

DSE focus:

- ionic equation
- heat of neutralization concept

### 4.5 Preparation of Soluble Salt

Virtual experience:

- Students prepare salt from acid and insoluble base/carbonate/metal.
- Excess solid is filtered.
- Filtrate is crystallized.

Required 3D content:

- beaker with acid
- excess solid powder
- warm water bath
- filter funnel
- evaporating dish
- crystals

Equation example:

```text
CuO(s) + H2SO4(aq) -> CuSO4(aq) + H2O(l)
```

DSE focus:

- use excess insoluble reactant
- filtration
- crystallization

### 4.6 Preparation of Insoluble Salt

Virtual experience:

- Students mix two soluble salts to form precipitate.
- Precipitate is filtered, washed and dried.

Required 3D content:

- two clear salt solutions
- instant cloudy precipitate
- filter funnel
- wash bottle
- drying paper

Equation example:

```text
AgNO3(aq) + NaCl(aq) -> AgCl(s) + NaNO3(aq)
```

DSE focus:

- precipitation
- ionic equation
- washing precipitate

### 4.7 Acid-Base Titration

Virtual experience:

- Students use pipette, burette and indicator to find concentration.

Required 3D content:

- 50 cm3 burette with scale
- 25 cm3 pipette with bulb
- conical flask
- white tile
- indicator drop
- drop-by-drop liquid stream
- endpoint color flash
- pH curve

Equation:

```text
Moles acid / coefficient = moles alkali / coefficient
```

DSE focus:

- rinse apparatus correctly
- endpoint
- titre concordance
- concentration calculation

## Chapter 5: Fossil Fuels and Carbon Compounds

### 5.1 Fractional Distillation of Crude Oil

Virtual experience:

- Students observe fractions separating by boiling range.

Required 3D content:

- fractionating tower
- temperature gradient
- colored fraction outlets
- gas/petrol/kerosene/diesel/bitumen labels

Equation:

```text
No chemical reaction: physical separation by boiling range
```

DSE focus:

- fraction order
- boiling point and molecule size

### 5.2 Combustion of Hydrocarbons

Virtual experience:

- Students compare complete and incomplete combustion.

Required 3D content:

- burner flame
- oxygen slider
- blue/yellow smoky flame
- soot particles
- CO2 and H2O labels

Equation example:

```text
CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)
```

DSE focus:

- complete vs incomplete combustion
- pollutants

### 5.3 Test for Unsaturation

Virtual experience:

- Students add bromine water to alkane and alkene.

Required 3D content:

- test tubes
- orange bromine water
- alkene decolorization
- alkane remains orange unless UV substitution mode is active

Equation example:

```text
C2H4 + Br2 -> C2H4Br2
```

DSE focus:

- alkenes undergo addition
- bromine water test

### 5.4 Polymerization

Virtual experience:

- Students join monomers into polymer chain.

Required 3D content:

- monomer cards/molecules
- double bond opening animation
- repeating unit brackets
- polymer chain texture

Equation example:

```text
n CH2=CH2 -> [-CH2-CH2-]n
```

DSE focus:

- monomer vs polymer
- addition polymerization
- repeating unit

## Chapter 6: Microscopic World II

### 6.1 Molecular Shape Modelling

Virtual experience:

- Students build linear, trigonal planar and tetrahedral models.

Required 3D content:

- atom spheres
- bond rods
- lone pair lobes
- bond angle labels
- rotatable model

Equation:

```text
Electron pairs repel and arrange as far apart as possible
```

DSE focus:

- VSEPR
- lone pair effect
- bond angle

### 6.2 Intermolecular Forces and Boiling Point

Virtual experience:

- Students compare molecules with different intermolecular forces.

Required 3D content:

- molecule clusters
- dotted attraction lines
- hydrogen bond labels
- heating slider
- separation of molecules during boiling

Equation:

```text
Stronger intermolecular forces -> higher boiling point
```

DSE focus:

- hydrogen bonding
- van der Waals forces
- polarity

## Chapter 7: Redox, Chemical Cells and Electrolysis

### 7.1 Oxidation and Reduction Reactions

Virtual experience:

- Students track electron loss and gain.

Required 3D content:

- two reactant particles
- electron transfer particles
- oxidation number labels
- oxidizing/reducing agent badges

Equation:

```text
Oxidation = loss of electrons
Reduction = gain of electrons
```

DSE focus:

- oxidation number changes
- agents
- balanced redox equation

### 7.2 Zinc-Copper Chemical Cell

Virtual experience:

- Students assemble a simple chemical cell.

Required 3D content:

- zinc half-cell
- copper half-cell
- salt bridge
- voltmeter
- external wire
- electron flow from zinc to copper
- ion flow in salt bridge

Equation:

```text
Zn(s) -> Zn2+(aq) + 2e-
Cu2+(aq) + 2e- -> Cu(s)
```

DSE focus:

- anode/cathode
- electron direction
- salt bridge function

### 7.3 Electrolysis of Copper(II) Sulfate Solution

Virtual experience:

- Students compare inert electrodes and copper electrodes.

Required 3D content:

- power supply
- electrodes
- blue CuSO4 solution
- Cu2+ ions moving to cathode
- copper deposit
- oxygen bubbles for inert anode mode

Equation examples:

```text
Cu2+(aq) + 2e- -> Cu(s)
4OH-(aq) -> O2(g) + 2H2O(l) + 4e-
```

DSE focus:

- electrode products
- solution color change
- half-equations

### 7.4 Electroplating

Virtual experience:

- Students plate an object with copper or silver.

Required 3D content:

- object as cathode
- metal anode
- electrolyte
- growing metallic coating
- current/time thickness graph

Equation example:

```text
Cu2+(aq) + 2e- -> Cu(s)
```

DSE focus:

- cathode object
- metal ion supply
- plating quality factors

## Chapter 8: Chemical Reactions and Energy

### 8.1 Exothermic and Endothermic Reactions

Virtual experience:

- Students observe temperature changes in reactions.

Required 3D content:

- polystyrene cup calorimeter
- thermometer/data logger
- warm glow or cold blue effect
- temperature-time graph

Equation:

```text
Delta H = H(products) - H(reactants)
```

DSE focus:

- exothermic vs endothermic
- energy level diagram

### 8.2 Heat of Neutralization

Virtual experience:

- Students mix acid and alkali and calculate heat change.

Required 3D content:

- calorimeter cup
- acid and alkali beakers
- thermometer
- temperature rise graph

Equation:

```text
q = mc Delta T
```

DSE focus:

- heat calculation
- sources of heat loss

### 8.3 Hess's Law

Virtual experience:

- Students build an energy cycle and calculate enthalpy.

Required 3D content:

- energy cycle diagram
- draggable reaction arrows
- enthalpy values
- equation multiplier controls

Equation:

```text
Overall Delta H = sum of route Delta H values
```

DSE focus:

- energy cycle
- sign reversal
- multiplying equations

## Chapter 9: Rate of Reaction

### 9.1 Rate Using Gas Syringe

Virtual experience:

- Students react calcium carbonate with acid and measure CO2 volume.

Required 3D content:

- conical flask
- carbonate chips
- acid
- delivery tube
- gas syringe with moving plunger
- CO2 particles
- volume-time graph

Equation:

```text
CaCO3(s) + 2HCl(aq) -> CaCl2(aq) + CO2(g) + H2O(l)
```

DSE focus:

- initial rate
- graph gradient
- limiting reagent

### 9.2 Effect of Concentration

Virtual experience:

- Students vary acid concentration and compare gas production.

Required 3D content:

- side-by-side flasks
- different particle density
- different bubble rate
- graph overlays

DSE focus:

- collision frequency
- fair test

### 9.3 Effect of Temperature

Virtual experience:

- Students vary temperature and observe rate.

Required 3D content:

- water bath
- thermometer
- faster particle motion at high temperature
- graph overlays

DSE focus:

- kinetic energy
- successful collision frequency

### 9.4 Effect of Surface Area

Virtual experience:

- Students compare lumps and powder.

Required 3D content:

- large chips vs powder particles
- visible exposed surface area
- different bubble rate

DSE focus:

- surface area and collision chance

### 9.5 Effect of Catalyst

Virtual experience:

- Students compare catalyzed and uncatalyzed reaction.

Required 3D content:

- catalyst surface
- particles adsorbing/desorbing
- lower activation energy graph

DSE focus:

- catalyst not consumed
- lower activation energy

## Chapter 10: Chemical Equilibrium

### 10.1 Dynamic Equilibrium Model

Virtual experience:

- Students observe forward and reverse reactions reaching equilibrium.

Required 3D content:

- reversible reaction chamber
- two colors of particles
- forward and reverse arrows
- concentration-time graph

Equation:

```text
A + B <=> C + D
```

DSE focus:

- dynamic nature
- equal rates at equilibrium

### 10.2 Le Chatelier's Principle

Virtual experience:

- Students change concentration, pressure and temperature.

Required 3D content:

- stress controls
- shifted equilibrium composition
- particle density change
- graph before/after stress

DSE focus:

- predict direction of shift
- explain using Le Chatelier's principle

## Chapter 11: Chemistry of Carbon Compounds

### 11.1 Functional Group Identification

Virtual experience:

- Students inspect unknown organic molecules.

Required 3D content:

- 3D organic molecule
- highlighted functional group
- structural formula label
- test-result cards

DSE focus:

- alcohols
- aldehydes
- ketones
- carboxylic acids
- esters

### 11.2 Isomer Builder

Virtual experience:

- Students build structural isomers from same molecular formula.

Required 3D content:

- atom palette
- bond builder
- formula checker
- side-by-side isomer display

DSE focus:

- same molecular formula
- different structural formula

### 11.3 Esterification

Virtual experience:

- Students combine alcohol and carboxylic acid.

Required 3D content:

- reflux setup
- water bath
- condenser
- ester product label
- odor cue as text only

Equation:

```text
carboxylic acid + alcohol <=> ester + water
```

DSE focus:

- ester linkage
- reversible reaction
- fruity smell note, waft only

## Chapter 12: Chemical Investigation

### 12.1 Fair Test and Variable Control

Virtual experience:

- Students design a controlled investigation.

Required 3D content:

- experiment planning board
- variable cards
- apparatus workspace
- data table
- graph builder

DSE focus:

- independent variable
- dependent variable
- controlled variables
- repeats
- error analysis

### 12.2 Data Logging and Error Analysis

Virtual experience:

- Students collect repeated readings and analyze uncertainty.

Required 3D content:

- digital sensor/data logger
- graph output
- uncertainty bars
- anomalous result marker

DSE focus:

- reliability
- validity
- precision
- conclusion quality

## Elective: Industrial Chemistry

### 13.1 Haber Process

Virtual experience:

- Students optimize ammonia production.

Required 3D content:

- reactor
- compressor
- heat exchanger
- catalyst bed
- recycle loop
- feed/product gas particles
- yield-rate-cost dashboard

Equation:

```text
N2(g) + 3H2(g) <=> 2NH3(g)
```

DSE focus:

- temperature-pressure compromise
- catalyst
- equilibrium and rate

### 13.2 Contact Process

Virtual experience:

- Students optimize sulfuric acid production.

Required 3D content:

- SO2/O2 feed
- vanadium(V) oxide catalyst bed
- SO3 converter
- oleum absorber
- catalyst poisoning warning

Equation:

```text
2SO2(g) + O2(g) <=> 2SO3(g)
```

DSE focus:

- process conditions
- yield and safety
- flow diagram interpretation

## Elective: Material Chemistry

### 14.1 Addition and Condensation Polymerization

Virtual experience:

- Students compare polymerization types.

Required 3D content:

- monomers
- polymer chains
- small molecule by-product for condensation
- repeating unit bracket

DSE focus:

- monomer deduction
- polymer type
- condensation by-product

### 14.2 Functional Materials

Virtual experience:

- Students test materials for conductivity, flexibility and response to stimulus.

Required 3D content:

- material sample tiles
- microstructure view
- stress/heat/electricity controls
- property graph

DSE focus:

- structure-property relationship
- application matching

## Elective: Analytical Chemistry

### 15.1 Flame Tests

Virtual experience:

- Students identify metal ions by flame color.

Required 3D content:

- Bunsen burner
- nichrome/platinum wire loop
- HCl cleaning step
- colored flames
- unknown sample mode

Common colors:

| Ion | Flame color |
|---|---|
| Li+ | crimson red |
| Na+ | golden yellow |
| K+ | lilac |
| Ca2+ | brick red |
| Ba2+ | apple green |
| Cu2+ | blue-green |

DSE focus:

- cation identification
- contamination by sodium

### 15.2 Gas Tests

Virtual experience:

- Students test hydrogen, oxygen, carbon dioxide, ammonia and chlorine.

Required 3D content:

- gas jar/test tube
- glowing splint
- lighted splint
- limewater
- damp red/blue litmus
- gas particles

Key observations:

| Gas | Test |
|---|---|
| H2 | burning splint gives pop sound cue |
| O2 | relights glowing splint |
| CO2 | turns limewater milky |
| NH3 | turns damp red litmus blue |
| Cl2 | bleaches damp litmus |

DSE focus:

- gas identification
- safe wafting

### 15.3 Cation and Anion Tests

Virtual experience:

- Students add reagents and observe precipitates or gas.

Required 3D content:

- test tube rack
- droppers
- reagent labels
- precipitate clouds
- soluble/insoluble behavior
- color chart

DSE focus:

- systematic qualitative analysis
- positive and negative results

### 15.4 Chromatography and Spectroscopy

Virtual experience:

- Students combine chromatography, IR/NMR/mass-spectrum clues.

Required 3D content:

- chromatogram
- spectrum viewer
- peak labels
- molecular structure candidates

DSE focus:

- Rf values
- functional group evidence
- structure deduction

## Implementation Priority

### Must Build First

1. Filtration
2. Crystallization
3. Distillation
4. Chromatography
5. pH and indicators
6. Acid-carbonate with CO2 test
7. Salt preparation
8. Titration
9. Metal-acid rate with gas syringe
10. Rusting conditions
11. Electrolysis of CuSO4
12. Zinc-copper chemical cell
13. Energy profile
14. Rate factors
15. Flame and gas tests

### Second Priority

1. Ionic/covalent/metallic bonding models
2. VSEPR molecular shape model
3. Hydrocarbon and polymer models
4. Equilibrium and Le Chatelier simulator
5. Haber and Contact process plants
6. Functional group and spectroscopy detective

## Required App Layout for These Experiments

The Chemistry Virtual Lab should use this layout:

```text
Header
------------------------------------------------------------
Collapsible sidebar | Chapters | Experiment content | Notes
------------------------------------------------------------
Footer
```

### Header

Show:

- current chapter number and title
- current experiment name
- play/pause
- reset
- export

### Collapsible Sidebar

Show:

- subject switcher
- Chemistry active state
- compact mode with icons only

### Chapters

Show HKDSE chapters in order:

1. Planet Earth
2. Microscopic World I
3. Metals
4. Acids and Bases
5. Fossil Fuels and Carbon Compounds
6. Microscopic World II
7. Redox, Cells and Electrolysis
8. Chemical Reactions and Energy
9. Rate of Reaction
10. Chemical Equilibrium
11. Chemistry of Carbon Compounds
12. Chemical Investigation
13. Industrial Chemistry
14. Material Chemistry
15. Analytical Chemistry

### Experiment Content

Show:

- 3D experiment setup
- apparatus workbench
- controls
- graph
- results table

### Notes

Show:

- procedure
- observations
- equation
- particles
- effects
- odor/safety notes
- DSE exam focus

## Quality Checklist

Before marking any experiment complete, verify:

- apparatus scale is realistic relative to other apparatus
- glassware is transparent with visible liquid level
- liquid color matches expected reagent
- gas bubbles or vapor appear where expected
- precipitate appears as suspended/cloudy particles
- labels are readable
- equations are visible
- graph or data table matches the experiment
- particle view explains the macroscopic observation
- safety/odor notes are present
- mobile layout does not overlap text or controls
- DSE exam focus is explicit

