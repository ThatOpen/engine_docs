# CRSData

Interface representing the Coordinate Reference System (CRS) data extracted from an IFC model's IFCPROJECTEDCRS and IFCMAPCONVERSION entities.

## Properties

### description

> **description**: `null` \| `string`

Description of the CRS, e.g. "RGF93_CC47"

***

### geodeticDatum

> **geodeticDatum**: `null` \| `string`

The geodetic datum name, e.g. "RGF93"

***

### mapConversion

> **mapConversion**: `null` \| `object`

Map conversion parameters from IFCMAPCONVERSION (null if not present)

***

### mapProjection

> **mapProjection**: `null` \| `string`

The map projection name

***

### mapUnit

> **mapUnit**: `null` \| `string`

The map unit name, e.g. "METRE"

***

### mapZone

> **mapZone**: `null` \| `string`

The map zone identifier

***

### name

> **name**: `null` \| `string`

The CRS name/identifier, e.g. "EPSG:3947"

***

### verticalDatum

> **verticalDatum**: `null` \| `string`

The vertical datum name
