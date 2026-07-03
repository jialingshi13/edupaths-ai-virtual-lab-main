# Chemistry 3D Experiment Redesign Audit

Date: 2026-06-28  
Target audience: High school chemistry students, including HKDSE-level learners  
Current design rating: 40 / 100

## Executive Summary

The current virtual chemistry lab has a working 3D canvas and broad topic coverage, but the learning experience is still below the quality expected for high school chemistry. Most scenes are visual demonstrations rather than complete virtual experiments.

The main issue is not only model quality. The deeper problem is that many experiments do not yet follow the way students actually learn chemistry: set up apparatus, add named chemicals, observe changes, measure results, record data, write equations, and explain the result using particles.

The next rebuild should focus on fewer but more complete experiments instead of many generic 3D scenes.

## Current Strengths

- The app already has broad chemistry chapter coverage.
- The 3D canvas is rotatable and supports zoom/pan interaction.
- The UI separates controls, graph, notes, protocol, and result record.
- There is a basic structure for variables, metrics, observations, and export.
- The project is suitable for expanding into a full virtual lab platform.

## Current Weaknesses

### 1. Experiments Feel Generic

Many scenes use labels such as sample, reagent, mixture, product, or particles. These are too vague for high school chemistry.

Students need to see real chemicals such as:

- HCl
- NaOH
- CuSO4
- Mg
- CaCO3
- AgNO3
- BaCl2
- KMnO4
- Fe2+
- Fe3+
- NH4+

### 2. Apparatus Is Too Simplified

Several scenes use beakers, flasks, tubes, and particles, but they do not always match the actual experiment.

Missing or weak apparatus includes:

- burette scale
- pipette
- white tile
- gas syringe
- delivery tube
- thermometer
- stopwatch
- balance
- pH meter
- ammeter
- voltmeter
- filter funnel
- evaporating dish
- condenser water inlet/outlet
- spotting tile
- litmus paper

### 3. Observations Are Not Strong Enough

High school chemistry depends heavily on visible observations.

Current scenes need more realistic and exam-relevant observations:

- bubbles / effervescence
- color changes
- precipitate formation
- precipitate dissolving in excess reagent
- flame colors
- temperature increase/decrease
- indicator endpoint
- limewater turning milky
- glowing splint relighting
- lighted splint pop sound cue
- disappearing cross
- crystal formation
- metal coating
- electrode mass change

### 4. Students Do Not Perform Enough Actions

Sliders are useful, but they should not be the only interaction.

Students should be able to perform experiment steps:

- choose reagent
- add reagent dropwise
- heat
- filter
- evaporate
- collect gas
- test gas
- rinse apparatus
- read a scale
- record titre
- repeat trial
- compare results

### 5. Particle-Level Explanation Is Not Connected Enough

Some particle animations exist, but they are often separate from the experiment logic.

Each experiment should connect:

- what students see in the apparatus
- what particles are doing
- the balanced equation
- the ionic equation
- the graph or measurement result

### 6. Data Handling Is Too Thin

High school students need practice with data and uncertainty.

Missing data features:

- trial tables
- repeat readings
- average calculation
- anomalous result detection
- graph plotting
- gradient interpretation
- percentage yield
- concentration calculation
- rate calculation
- uncertainty and error source

### 7. Exam Alignment Needs To Be Stronger

The app should prepare students for school exams.

Each experiment should include:

- aim
- variables
- controlled variables
- expected observations
- balanced equation
- ionic equation where relevant
- safety note
- source of error
- improvement
- conclusion sentence
- short exam questions

## Recommended Rebuild Model

Each chemistry experiment should be rebuilt using this structure.

## 1. Apparatus View

The main 3D workspace should show the actual apparatus setup. Students should be able to rotate and inspect it.

Required qualities:

- recognisable apparatus
- correct relative positions
- labelled components
- realistic liquid levels
- measurable scales
- visible reaction changes
- no generic placeholder objects

## 2. Action Flow

Each experiment should have step buttons or action states.

Example:

1. Add dilute hydrochloric acid
2. Insert delivery tube
3. Collect gas
4. Test gas with lighted splint
5. Record observation

## 3. Particle View

The scene should include a toggle or inset particle model.

Example:

- H+ ions collide with Mg atoms
- Mg atoms become Mg2+ ions
- electrons reduce H+ to H2 gas
- H2 bubbles leave the solution

## 4. Data View

Students should collect or generate data from the experiment.

Example:

- gas volume against time
- pH against volume of alkali added
- temperature against time
- mass change at electrode
- Rf value calculation

## 5. Notebook View

The side panel should guide student thinking.

Required sections:

- Aim
- Procedure
- Observations
- Results
- Calculation
- Conclusion
- Error and improvement

## 6. Exam View

Each experiment should include short assessment prompts.

Example:

- State the gas test for hydrogen.
- Explain why powdered marble reacts faster than marble chips.
- Write the ionic equation for neutralization.
- Explain why the first titre is usually rough.

## Priority Experiments To Build

These should be built first because they are highly visual, common in high school chemistry, and suitable for 3D simulation.

## Priority 1: Core Wet Chemistry

### Acid-Base Titration

Required details:

- burette with scale
- pipette
- conical flask
- white tile
- indicator bottle
- endpoint color transition
- rough titre
- concordant titres
- concentration calculation

Key learning:

- mole ratio
- concentration calculation
- endpoint accuracy
- titre reliability

### Gas Tests Lab

Required details:

- test tube
- delivery tube
- gas jar
- litmus paper
- limewater
- glowing splint
- lighted splint

Gases:

- H2: pop with lighted splint
- O2: glowing splint relights
- CO2: limewater turns milky
- NH3: damp red litmus turns blue
- Cl2: damp blue litmus bleaches

### Rate of Reaction: Magnesium and Hydrochloric Acid

Required details:

- conical flask
- gas syringe
- stopwatch
- magnesium ribbon or powder
- acid concentration control
- gas volume graph

Key learning:

- concentration
- temperature
- surface area
- collision theory
- rate from graph gradient

### Rate of Reaction: Sodium Thiosulfate and Acid

Required details:

- conical flask over black cross
- cloudy sulfur formation
- timer
- concentration and temperature controls

Key learning:

- disappearing cross method
- rate = 1 / time
- fair test

## Priority 2: Separation and Analysis

### Chromatography

Required details:

- chromatography paper
- pencil baseline
- solvent level below baseline
- colored spots
- solvent front
- Rf calculation

Key learning:

- solubility
- adsorption
- Rf value
- mixture separation

### Salt Preparation

Required details:

- acid + insoluble base
- warming
- excess solid
- filtration
- evaporation
- crystallization
- drying crystals

Example:

CuO(s) + H2SO4(aq) -> CuSO4(aq) + H2O(l)

Key learning:

- soluble salt preparation
- removing excess reactant
- crystallization
- percentage yield

### Qualitative Analysis

Required details:

- spotting tile
- dropper
- test tubes
- precipitate colors
- excess ammonia / sodium hydroxide

Tests:

- Cu2+: blue precipitate
- Fe2+: green precipitate
- Fe3+: brown precipitate
- NH4+: ammonia gas with warm alkali
- Cl-: white precipitate with AgNO3
- SO4 2-: white precipitate with Ba2+
- CO3 2-: CO2 with acid

## Priority 3: Electrochemistry

### Electrolysis of Copper(II) Sulfate

Required details:

- beaker
- blue CuSO4 solution
- carbon electrodes
- copper electrodes option
- power supply
- ammeter
- gas bubbles
- copper deposit
- color fading
- electrode mass change

Key learning:

- cation and anion movement
- cathode/anode
- oxidation/reduction
- half equations

### Simple Chemical Cell

Required details:

- zinc half-cell
- copper half-cell
- salt bridge
- voltmeter
- electron flow through wire
- ion movement through salt bridge

Key learning:

- redox reaction
- electrode potential
- current direction
- salt bridge function

## Priority 4: Organic and Materials Chemistry

### Hydrocarbon Combustion

Required details:

- burner flame
- soot level
- oxygen supply
- CO2 and H2O products

Key learning:

- complete combustion
- incomplete combustion
- carbon monoxide hazard
- balanced equations

### Bromine Water Test for Alkenes

Required details:

- alkane vs alkene comparison
- orange bromine water decolorizes for alkene
- molecular view of addition reaction

Key learning:

- saturation and unsaturation
- addition reaction
- functional group test

### Polymerization

Required details:

- monomer units
- double bond opening
- repeating unit
- chain growth
- cross-linking option

Key learning:

- addition polymerization
- monomer vs polymer
- repeating unit
- thermoplastic vs thermosetting

## Design Problems To Fix

## 1. Canvas Is Too Small In Some Layouts

In the current chemistry layout, the 3D canvas can become narrow when side content and notes are open.

Recommendation:

- make 3D canvas the main workspace
- keep controls in a collapsible right panel
- keep notes in tabs or drawer
- allow full-screen 3D mode

## 2. Controls Are Too Abstract

Current sliders are useful but too detached from the apparatus.

Recommendation:

- keep sliders for variables
- add action buttons for experiment steps
- add apparatus-specific controls such as open tap, add drop, heat, filter, collect gas

## 3. Labels Are Too General

Recommendation:

- label actual apparatus
- label actual chemicals
- show formulae using correct notation
- use state symbols where relevant

Example:

Bad:

sample + reagent

Better:

Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g)

## 4. Feedback Is Too Passive

Recommendation:

Every student action should produce visible feedback.

Examples:

- adding acid starts bubbles
- heating increases particle speed
- increasing concentration steepens graph
- overshooting endpoint turns solution strongly pink
- adding excess ammonia dissolves selected precipitates

## 5. The Scenes Need Quality Tiers

Not every scene needs the same complexity.

Recommended tiers:

- Tier A: full interactive experiment
- Tier B: apparatus + data simulation
- Tier C: particle model / concept visualizer

Core school experiments should be Tier A.

## Automatic Rebuild Roadmap

## Phase 1: Build Shared Chemistry 3D Components

Create reusable 3D components:

- Beaker
- Test tube
- Conical flask
- Burette
- Pipette
- Measuring cylinder
- Gas syringe
- Delivery tube
- Filter funnel
- Evaporating dish
- Thermometer
- Stopwatch
- Balance
- pH meter
- Ammeter
- Voltmeter
- Power supply
- Electrode
- Bunsen burner
- Tripod and gauze
- Retort stand and clamp

## Phase 2: Build Shared Chemical Effects

Create reusable effects:

- bubbles
- precipitate cloud
- color transition
- flame color
- steam
- gas flow
- liquid pouring
- crystal growth
- electrode deposit
- heat shimmer
- cloudy solution
- pH indicator gradient

## Phase 3: Build Experiment State Machines

Each experiment should have states.

Example for titration:

1. Setup
2. Rinse burette
3. Fill burette
4. Pipette acid
5. Add indicator
6. Titrate
7. Endpoint
8. Record titre
9. Repeat
10. Calculate concentration

## Phase 4: Connect Scene, Data, and Notebook

Each experiment should produce:

- visual observation
- measured value
- graph data
- table data
- conclusion text
- exam questions

## Phase 5: Student Assessment Layer

Add:

- prediction questions
- observation checks
- equation input
- multiple choice
- calculation steps
- teacher mode answer key

## Minimum Quality Standard For Each Experiment

An experiment should not be considered complete unless it has:

- named chemicals
- correct apparatus
- visible observations
- at least one measurable value
- graph or table if relevant
- balanced equation
- safety note
- particle-level explanation
- student action flow
- exam-style question

## Suggested New Experiment List

### Core Required Experiments

1. Acid-base titration
2. Gas tests
3. Magnesium + hydrochloric acid rate experiment
4. Sodium thiosulfate disappearing cross
5. Salt preparation by acid + insoluble base
6. Paper chromatography
7. Simple distillation
8. Fractional distillation
9. Filtration and crystallization
10. Flame tests
11. Qualitative cation tests
12. Qualitative anion tests
13. Electrolysis of copper(II) sulfate
14. Electrolysis of acidified water
15. Simple chemical cell
16. Rusting conditions
17. Neutralization calorimetry
18. Enthalpy of combustion
19. Bromine water test for alkenes
20. Polymerization model

### Extension Experiments

1. Le Chatelier equilibrium color change
2. Cobalt chloride hydration equilibrium
3. Iron(III) thiocyanate equilibrium
4. Hard water testing
5. Soap and detergent comparison
6. Fertilizer ammonia test
7. Limestone thermal decomposition
8. Metal displacement reactions
9. Reactivity series investigation
10. Ester preparation

## Final Evaluation

The current app has a useful foundation, but the chemistry experiment quality is below average because the scenes are not yet detailed enough, specific enough, or interactive enough for high school learning.

The next development goal should be:

Build fewer experiments, but make each one feel like a real virtual lab.

Recommended target for the next version:

- 8 high-quality Tier A experiments
- full apparatus interaction
- real chemicals and equations
- particle view
- data collection
- exam-style notebook

This would raise the product from a 40 / 100 visual prototype to roughly a 75 / 100 high school chemistry learning tool.

