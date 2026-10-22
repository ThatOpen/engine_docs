# VirtualMultithreadingConfig

Interface representing multithreading timing configuration for virtual models.

## Properties

### meshConnectionRate?

> `optional` **meshConnectionRate**: `number`

Interval in milliseconds to flush queued mesh requests

***

### meshConnectionThreshold?

> `optional` **meshConnectionThreshold**: `number`

Queue length that, when exceeded, triggers immediate mesh request flushing

***

### threadUpdaterDelay?

> `optional` **threadUpdaterDelay**: `number`

Delay in milliseconds between worker-side update loop iterations
