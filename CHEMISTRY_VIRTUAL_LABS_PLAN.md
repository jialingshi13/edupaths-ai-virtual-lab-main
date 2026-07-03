# Chemistry Virtual Labs Build Plan

## Goal

Build a full DSE Chemistry virtual lab studio in `C:\SunTech\EduCircle\EduPaths\virtual-labs`, using the chemistry syllabus and topic structure from:

`C:\SunTech\EduCircle\EduPaths\educircle-chem`

The chemistry lab studio should support practical experiments, 2D graphs, 3D molecular models, animated apparatus, data collection, DSE-style observations, and notebook/export workflows.

## Source Curriculum

The chemistry topic structure is based on `educircle-chem/src/lib/chemistryData.js`.

It covers:

- 12 compulsory DSE Chemistry chapters
- 3 elective chemistry areas
- About 34 unit-level chemistry topics
- Existing game/simulation ideas such as Atomic Builder, Bond Builder, pH Master, Rate Lab, Energy Diagram Master, Process Designer, Spectra Detective, and Separation Master

## Current State

The standalone `virtual-labs` app already supports:

- Multi-subject lab browsing
- Chemistry, Physics, Biology, Geography, Economics, and Mathematics categories
- Slider-based controls
- SVG graphs
- Three.js 3D scenes
- Lab metrics and observations
- JSON snapshot export

The chemistry app `educircle-chem` already contains several chemistry game components, but its `VirtualLab.jsx` page only implements a few direct lab experiences:

- Acid-base titration
- Flame test
- Rate of reaction

Other listed labs such as electrolysis, chromatography, and Haber process are present as ideas but not fully implemented in that page.

## Product Direction

The chemistry virtual labs should become a DSE Chemistry Lab Studio with:

- Chapter-based lab navigation
- Topic-to-lab mapping
- Practical experiment simulations
- 3D molecular and particle animations
- Graphs and quantitative analysis
- DSE-style observations and questions
- Safety notes where relevant
- Notebook/export output for students and teachers

## Phase 1: Chemistry Lab Framework

Create a chemistry-specific framework inside the `virtual-labs` app.

### Main Tasks

- Create `src/data/chemistryLabCatalog.js`
- Define a reusable chemistry lab schema
- Add chapter and unit mapping from `educircle-chem`
- Add a chemistry lab browser grouped by DSE chapter
- Add shared panels for:
  - Apparatus
  - Procedure
  - Variables
  - Graph
  - Observations
  - Safety
  - DSE questions
  - Notebook/export

### Lab Schema

Each lab should define:

- `id`
- `chapterId`
- `unitId`
- `title`
- `subtitle`
- `concepts`
- `dsePoints`
- `scene`
- `graph`
- `controls`
- `defaultControls`
- `procedure`
- `apparatus`
- `safety`
- `resources`

## Phase 2: Core Practical Labs

Build the highest-value DSE practical chemistry labs first.

### 1. Separation of Mixtures

Topics:

- Filtration
- Distillation
- Chromatography
- Crystallization
- Separating funnel

Experience:

- 2D/3D apparatus setup
- Method selection
- Animated separation process
- Rf calculation for chromatography
- DSE-style question: choose the correct separation method

### 2. pH and Indicators

Topics:

- pH scale
- Strong and weak acids
- Indicators
- Universal indicator color changes

Experience:

- pH slider
- Acid/base strength comparison
- Indicator color table
- pH calculation output
- Observation notebook

### 3. Acid-Base Titration

Topics:

- Burette use
- Standard solution
- Endpoint
- Indicator selection
- Titration calculation
- Experimental error

Experience:

- 3D burette and conical flask
- Drop-by-drop titration
- pH curve graph
- Endpoint marker
- Titre error metric
- JSON/CSV snapshot export

### 4. Salt Preparation

Topics:

- Soluble salt preparation
- Insoluble salt preparation
- Titration method
- Crystallization
- Precipitation

Experience:

- Method selector
- Reagent selection
- Heating/filtering/crystallization stages
- Product yield
- Solubility and method explanation

### 5. Rate of Reaction

Topics:

- Temperature
- Concentration
- Surface area
- Catalyst
- Collision theory

Experience:

- Particle collision animation
- Gas syringe model
- Product/time graph
- Rate index
- Half-time calculation
- DSE graph interpretation prompts

### 6. Electrolysis

Topics:

- Electrolytic cell
- Anode
- Cathode
- Ion migration
- Product prediction
- Electroplating
- Electrolytic refining

Experience:

- 3D electrolysis tank
- Moving ions
- Electrode product labels
- Current/yield graph
- Half-equation prompts
- Product prediction mode

### 7. Chemical Cells

Topics:

- Electrodes
- Electrolyte
- Salt bridge
- Half-reactions
- EMF
- Zinc-copper cell

Experience:

- 3D zinc-copper cell
- Electron flow animation
- Ion flow through salt bridge
- EMF calculator
- Half-equation builder

### 8. Flame Test and Qualitative Analysis

Topics:

- Flame test
- Gas tests
- Precipitation reactions
- Cation identification
- Anion identification

Experience:

- Flame color simulation
- Unknown sample mode
- Test result table
- Chemical detective workflow
- DSE-style unknown identification question

## Phase 3: 3D Atomic and Bonding Experiences

Build the microscopic chemistry experiences with Three.js.

### Atomic Structure

Topics:

- Protons
- Neutrons
- Electrons
- Atomic number
- Mass number
- Electron shells
- Isotopes

Experience:

- 3D atom builder
- Shell filling
- Isotope comparison
- Mass number and charge calculation

### Ionic Bonding

Topics:

- Electron transfer
- Cations
- Anions
- Lattice structure
- Ionic compound properties

Experience:

- Electron transfer animation
- Ion formation
- 3D ionic lattice
- Conductivity and melting point explanation

### Covalent Bonding

Topics:

- Electron sharing
- Single, double, and triple bonds
- Molecular structure
- Electronegativity

Experience:

- Shared electron-pair animation
- Molecule builder
- Bond type selector
- Simple structure-property explanation

### Metallic Bonding

Topics:

- Sea of electrons
- Malleability
- Electrical conductivity
- Thermal conductivity
- Alloys

Experience:

- 3D metal lattice
- Delocalized electron animation
- Stress/malleability visualizer
- Alloy strengthening model

### VSEPR Molecular Shapes

Topics:

- Linear
- Trigonal planar
- Tetrahedral
- Lone pairs
- Bond angles

Experience:

- 3D rotatable molecular shapes
- Lone-pair toggle
- Bond angle readout
- Shape prediction prompts

### Intermolecular Forces

Topics:

- Van der Waals forces
- Hydrogen bonds
- Polar molecules
- Non-polar molecules
- Boiling point comparison

Experience:

- Molecule attraction animation
- Force strength comparison
- Boiling point ranking challenge

## Phase 4: Organic and Carbon Chemistry

Build molecule-focused chemistry labs.

### Hydrocarbon Builder

Topics:

- Alkanes
- Alkenes
- Homologous series
- Nomenclature
- Structural formulae

Experience:

- Carbon-chain builder
- Saturated vs unsaturated comparison
- Formula validation
- Naming challenge

### Organic Reaction Visualizer

Topics:

- Addition reaction
- Substitution reaction
- Combustion
- Polymerization

Experience:

- Reaction type selector
- Reactant/product animation
- Bromine water test
- Product prediction challenge

### Polymer Factory

Topics:

- Monomer
- Polymer
- Addition polymerization
- Thermoplastic
- Thermosetting plastic

Experience:

- Monomer-to-polymer chain animation
- Polymer length slider
- Property comparison
- Plastic classification task

### Functional Group Detective

Topics:

- Alcohols
- Aldehydes
- Ketones
- Carboxylic acids
- Esters
- Isomers

Experience:

- Functional group highlighter
- Isomer builder
- Spectrum/test-result matching
- Unknown compound mode

## Phase 5: Energy, Equilibrium, and Industrial Chemistry

Build graph-heavy advanced simulations.

### Energy Profile Lab

Topics:

- Exothermic reactions
- Endothermic reactions
- Activation energy
- Catalyst effect
- Enthalpy change

Experience:

- Interactive energy profile diagram
- Catalyst pathway overlay
- Enthalpy and activation energy readouts
- DSE diagram drawing prompts

### Hess's Law Lab

Topics:

- Hess's law
- Energy cycles
- Enthalpy of formation
- Enthalpy of combustion

Experience:

- Energy cycle builder
- Equation rearrangement
- Enthalpy calculation checker
- Step-by-step explanation

### Dynamic Equilibrium Lab

Topics:

- Dynamic equilibrium
- Equilibrium constant
- Forward and reverse rates
- Le Chatelier's principle

Experience:

- Particle-level reversible reaction
- Concentration/time graph
- Equilibrium shift visualizer
- Kc calculation

### Haber Process Plant

Topics:

- Haber process
- Nitrogen and hydrogen reaction
- Catalyst
- Temperature-pressure optimization

Experience:

- Industrial reactor dashboard
- Yield/rate tradeoff
- Temperature and pressure sliders
- Cost/energy efficiency score

### Contact Process Plant

Topics:

- Contact process
- SO3 production
- Oleum
- Catalyst poisoning
- Industrial condition optimization

Experience:

- Process flow diagram
- Reactor condition controls
- Yield and impurity risk metrics
- Industrial decision prompts

## Phase 6: Materials and Analytical Chemistry

Build elective and extension chemistry experiences.

### Synthetic Polymers

Topics:

- Addition polymerization
- Condensation polymerization
- Nylon
- Polyester
- Cross-linking

Experience:

- Polymer type selector
- Monomer deduction
- Condensation by-product animation
- Cross-linking property comparison

### Functional Materials

Topics:

- Conducting polymers
- Nanomaterials
- Smart materials
- Biomaterials

Experience:

- Material property lab
- Conductivity/flexibility/temperature response sliders
- Application matching activity

### Spectroscopy Decoder

Topics:

- IR spectroscopy
- NMR
- Mass spectrometry
- Chromatography

Experience:

- Spectrum viewer
- Peak matching
- Functional group deduction
- Unknown compound challenge

### Full Qualitative Analysis Flowchart

Topics:

- Flame test
- Gas tests
- Cation tests
- Anion tests
- Precipitation reactions

Experience:

- Step-by-step unknown sample workflow
- Test selection
- Observation recording
- Ion identification result

## Phase 7: EduCircle Integration

Connect the standalone virtual labs with the existing chemistry app.

### Integration Tasks

- Map every chemistry lab to `chapterId` and `unitId` from `chemistryData.js`
- Add optional bilingual labels from `educircle-chem`
- Link labs from chapter/unit pages
- Support embedding `virtual-labs` inside EduCircle by iframe or route bridge
- Add progress tracking later through EduCircle learning records
- Keep the lab app standalone so it can also support Physics, Biology, Geography, Economics, and Mathematics

## Recommended Build Order

1. Chemistry lab catalog and chapter browser
2. Core practical MVP:
   - Titration
   - pH
   - Rate of reaction
   - Electrolysis
   - Separation
   - Flame test
3. 3D microscopic models:
   - Atomic structure
   - Bonding
   - VSEPR
   - Ionic lattice
4. Organic chemistry and polymer labs
5. Energy, equilibrium, and industrial process labs
6. Analytical and material chemistry elective labs
7. EduCircle integration and learning progress tracking

## MVP Definition

The first useful release should include:

- Chemistry-only chapter browser
- 6 complete practical labs
- Each lab has controls, animation, graph/metrics, procedure, observations, and export
- At least 3 labs use Three.js scenes
- At least 3 labs include quantitative graph analysis
- DSE chapter/unit mapping is stored in the catalog

## Longer-Term Target

The complete chemistry experience should cover every chemistry unit in `educircle-chem`, with a mix of:

- Practical lab simulations
- Molecular/atomic 3D models
- Graph-based investigations
- Industrial process simulators
- Analytical detective activities
- DSE-style explanation and calculation prompts

