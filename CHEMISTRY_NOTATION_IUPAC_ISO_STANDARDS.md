# Chemistry Notation, IUPAC and SI/ISO-Style Standards

## Purpose

The Chemistry Virtual Lab should display chemistry with the same care that mathematics uses LaTeX. Chemical equations, formulae, oxidation states, charges, state symbols, IUPAC names, SI units and thermodynamic notation must be consistent, readable and exam-appropriate for HKDSE Chemistry.

This file defines the notation standard for all chemistry virtual lab content.

## Display Standard

Chemical content should be rendered with:

- subscripts for atom counts: `H₂O`, `CO₂`, `H₂SO₄`
- superscripts for charges: `Na⁺`, `SO₄²⁻`, `Al³⁺`
- state symbols: `(s)`, `(l)`, `(g)`, `(aq)`
- reaction arrows: `→`
- reversible arrows: `⇌`
- electron notation: `e⁻`
- enthalpy notation: `ΔH`
- standard enthalpy notation: `ΔH°`
- concentration notation: `[H⁺]`
- equilibrium constant notation: `Kc`
- units with spacing: `25.0 cm³`, `0.100 mol dm⁻³`, `57.3 kJ mol⁻¹`

## Formula Formatting Rules

### Subscripts

Use subscripts for the number of atoms in a formula.

Correct:

```text
H₂O
CO₂
CaCO₃
Al₂(SO₄)₃
```

Plain source form:

```text
H2O
CO2
CaCO3
Al2(SO4)3
```

Virtual lab renderer should convert these to subscript display.

### Charges

Use superscripts for ionic charges.

Correct:

```text
Na⁺
Mg²⁺
Al³⁺
Cl⁻
SO₄²⁻
CO₃²⁻
NH₄⁺
```

Plain source form:

```text
Na^+
Mg^2+
Al^3+
Cl^-
SO4^2-
CO3^2-
NH4^+
```

### State Symbols

State symbols must be lowercase and placed immediately after the formula.

```text
(s) solid
(l) liquid
(g) gas
(aq) aqueous solution
```

Examples:

```text
Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)
H⁺(aq) + OH⁻(aq) → H₂O(l)
```

## Reaction Arrows and Signs

| Symbol | Meaning | Use |
|---|---|---|
| `→` | produces / reacts to form | ordinary reaction |
| `⇌` | reversible reaction / equilibrium | equilibrium, esterification, Haber process |
| `+` | reacts with / plus | between reactants or products |
| `Δ` | heating | above reaction arrow where relevant |
| `hv` | ultraviolet light | photochemical substitution |
| `Pt`, `V₂O₅`, `Fe` | catalyst | above reaction arrow where relevant |

Examples:

```text
CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g)     condition: UV light
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)                catalyst: Fe
2SO₂(g) + O₂(g) ⇌ 2SO₃(g)               catalyst: V₂O₅
```

## Ionic Equation Rules

### Remove Spectator Ions

Full equation:

```text
AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)
```

Ionic equation:

```text
Ag⁺(aq) + Cl⁻(aq) → AgCl(s)
```

Spectator ions:

```text
Na⁺(aq), NO₃⁻(aq)
```

### Acid-Base Neutralization

```text
H⁺(aq) + OH⁻(aq) → H₂O(l)
```

### Carbonate with Acid

```text
CO₃²⁻(aq/s) + 2H⁺(aq) → CO₂(g) + H₂O(l)
```

### Metal with Acid

```text
Mg(s) + 2H⁺(aq) → Mg²⁺(aq) + H₂(g)
```

## Redox Notation

### Electron Transfer

Oxidation:

```text
Zn(s) → Zn²⁺(aq) + 2e⁻
```

Reduction:

```text
Cu²⁺(aq) + 2e⁻ → Cu(s)
```

Overall:

```text
Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)
```

### Oxidation Number Notation

Use Roman numerals in names:

```text
iron(II) sulfate
iron(III) chloride
copper(II) oxide
manganese(IV) oxide
lead(II) bromide
```

Use signed oxidation numbers in explanation:

```text
Fe²⁺: oxidation number +2
Fe³⁺: oxidation number +3
Mn in MnO₄⁻: oxidation number +7
```

### Redox Keywords

```text
Oxidation = loss of electrons
Reduction = gain of electrons
Oxidizing agent = species reduced
Reducing agent = species oxidized
```

## Electrochemistry Notation

### Chemical Cell

Anode, oxidation:

```text
Zn(s) → Zn²⁺(aq) + 2e⁻
```

Cathode, reduction:

```text
Cu²⁺(aq) + 2e⁻ → Cu(s)
```

Cell notation:

```text
Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
```

Display notes:

- single vertical line `|` means phase boundary
- double vertical line `||` means salt bridge
- anode is written on the left
- cathode is written on the right

### Electrolysis

Cathode:

```text
negative electrode
reduction occurs
```

Anode:

```text
positive electrode
oxidation occurs
```

Copper(II) sulfate with inert electrodes:

```text
Cathode: Cu²⁺(aq) + 2e⁻ → Cu(s)
Anode: 4OH⁻(aq) → O₂(g) + 2H₂O(l) + 4e⁻
```

Molten lead(II) bromide:

```text
Cathode: Pb²⁺(l) + 2e⁻ → Pb(l)
Anode: 2Br⁻(l) → Br₂(g) + 2e⁻
Overall: PbBr₂(l) → Pb(l) + Br₂(g)
```

## Thermochemistry and Enthalpy Notation

### Enthalpy Symbols

| Symbol | Meaning |
|---|---|
| `ΔH` | enthalpy change |
| `ΔH°` | standard enthalpy change |
| `ΔHc°` | standard enthalpy change of combustion |
| `ΔHf°` | standard enthalpy change of formation |
| `Ea` | activation energy |
| `q` | heat energy |
| `c` | specific heat capacity |

### Units

```text
ΔH: kJ mol⁻¹
Ea: kJ mol⁻¹
q: J or kJ
temperature: °C or K
```

### Calorimetry

```text
q = mcΔT
ΔH = -q / n
```

Display:

```text
m = 50.0 g
c = 4.2 J g⁻¹ °C⁻¹
ΔT = 6.5 °C
q = 50.0 × 4.2 × 6.5 = 1365 J
```

### Hess's Law

```text
ΔH reaction = ΣΔHf°(products) - ΣΔHf°(reactants)
```

Combustion cycle:

```text
ΔH target = ΣΔHc°(reactants) - ΣΔHc°(products)
```

Bond enthalpy:

```text
ΔH = Σ bond energies broken - Σ bond energies formed
```

### Energy Profile Labels

Required labels:

- reactants
- products
- activation energy, `Ea`
- enthalpy change, `ΔH`
- catalyzed pathway
- uncatalyzed pathway

Exothermic:

```text
ΔH < 0
products lower than reactants
```

Endothermic:

```text
ΔH > 0
products higher than reactants
```

## Equilibrium Notation

### Reversible Reactions

Use `⇌`.

Examples:

```text
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
2SO₂(g) + O₂(g) ⇌ 2SO₃(g)
CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O
```

### Equilibrium Constant

For:

```text
aA + bB ⇌ cC + dD
```

Use:

```text
Kc = [C]^c[D]^d / [A]^a[B]^b
```

Do not include pure solids or pure liquids.

Example:

```text
H₂(g) + I₂(g) ⇌ 2HI(g)
Kc = [HI]² / ([H₂][I₂])
```

## IUPAC Naming Standards

## Inorganic Naming

### Simple Ionic Compounds

Name cation first, then anion.

```text
NaCl: sodium chloride
MgO: magnesium oxide
CaCO₃: calcium carbonate
Na₂SO₄: sodium sulfate
KNO₃: potassium nitrate
```

### Transition Metal Compounds

Use Roman numerals for variable oxidation states.

```text
FeCl₂: iron(II) chloride
FeCl₃: iron(III) chloride
CuO: copper(II) oxide
Cu₂O: copper(I) oxide
PbBr₂: lead(II) bromide
MnO₂: manganese(IV) oxide
```

### Common Polyatomic Ions

| Ion | Formula |
|---|---|
| ammonium | `NH₄⁺` |
| hydroxide | `OH⁻` |
| nitrate | `NO₃⁻` |
| carbonate | `CO₃²⁻` |
| sulfate | `SO₄²⁻` |
| sulfite | `SO₃²⁻` |
| phosphate | `PO₄³⁻` |
| hydrogencarbonate | `HCO₃⁻` |

## Organic IUPAC Naming

### Parent Chain Prefixes

| Carbons | Prefix |
|---:|---|
| 1 | meth- |
| 2 | eth- |
| 3 | prop- |
| 4 | but- |
| 5 | pent- |
| 6 | hex- |
| 7 | hept- |
| 8 | oct- |
| 9 | non- |
| 10 | dec- |

### Saturation

| Family | Ending | Formula |
|---|---|---|
| alkane | `-ane` | `CₙH₂ₙ₊₂` |
| alkene | `-ene` | `CₙH₂ₙ` |
| alkyne | `-yne` | `CₙH₂ₙ₋₂` |

Examples:

```text
CH₄: methane
C₂H₆: ethane
C₂H₄: ethene
C₃H₆: propene
```

### Functional Group Endings

| Family | Group | Ending / prefix | Example |
|---|---|---|---|
| alcohol | `-OH` | `-ol` | ethanol |
| aldehyde | `-CHO` | `-al` | ethanal |
| ketone | `>C=O` | `-one` | propanone |
| carboxylic acid | `-COOH` | `-oic acid` | ethanoic acid |
| ester | `-COO-` | alkyl alkanoate | ethyl ethanoate |
| haloalkane | `-Cl`, `-Br`, `-I` | chloro-, bromo-, iodo- | chloroethane |

### Numbering Rules

1. Choose the longest carbon chain containing the main functional group.
2. Number from the end giving the functional group the lowest number.
3. Give double/triple bonds low numbers when relevant.
4. List substituents alphabetically.
5. Use di-, tri-, tetra- for repeated substituents.

Examples:

```text
CH₃CH₂CH₂OH: propan-1-ol
CH₃CHOHCH₃: propan-2-ol
CH₂=CHCH₃: prop-1-ene
CH₃COCH₃: propanone
CH₃COOH: ethanoic acid
CH₃COOCH₂CH₃: ethyl ethanoate
```

## SI and ISO-Style Unit Rules

Use SI-style spacing between number and unit.

Correct:

```text
25.0 cm³
0.100 mol dm⁻³
298 K
25 °C
101 kPa
57.3 kJ mol⁻¹
```

Avoid:

```text
25.0cm3
0.100M
25°C without spacing in formal notes
```

### Common Chemistry Units

| Quantity | Unit |
|---|---|
| mass | `g`, `kg` |
| volume | `cm³`, `dm³` |
| concentration | `mol dm⁻³` |
| amount of substance | `mol` |
| temperature | `°C`, `K` |
| pressure | `Pa`, `kPa`, `atm` |
| energy | `J`, `kJ` |
| enthalpy change | `kJ mol⁻¹` |
| rate | `cm³ s⁻¹`, `mol dm⁻³ s⁻¹` |

### Volume Conversion

```text
1 dm³ = 1000 cm³
25.0 cm³ = 0.0250 dm³
```

### Concentration

```text
c = n / V
n = cV
V must be in dm³ when c is in mol dm⁻³
```

## Virtual Lab UI Requirements

Every equation panel should support:

- subscript atom counts
- superscript charges
- state symbols
- reversible arrows
- electron notation
- oxidation-state labels
- enthalpy symbols
- SI units
- IUPAC names

Every experiment note should include:

```text
Formula:
IUPAC/common name:
Balanced equation:
Ionic equation:
Half-equation if redox:
State symbols:
Observation:
Particle explanation:
Safety/odor note:
Units:
DSE exam point:
```

## Required Renderer Behavior

The app should render source text like:

```text
Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)
Cu^2+(aq) + 2e^- -> Cu(s)
N2(g) + 3H2(g) <=> 2NH3(g)
Delta H = H(products) - H(reactants)
```

As:

```text
Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)
Cu²⁺(aq) + 2e⁻ → Cu(s)
N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
ΔH = H(products) - H(reactants)
```

## Priority for Implementation

1. Render all lab equations with chemical subscripts/superscripts.
2. Add an equation bank to each lab.
3. Add IUPAC/common-name cards.
4. Add ionic equation and half-equation panels.
5. Add SI unit formatting to all numeric results.
6. Add enthalpy-cycle diagrams for energy chapters.
7. Add Kc expression renderer for equilibrium.
8. Add organic structure/name renderer for carbon chemistry.

