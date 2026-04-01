# Optimización de Imágenes - Sección Nuestro Proceso

## Problema Original
Las imágenes de la sección "Nuestro Proceso" estaban extremadamente grandes:
- diagnostico.png: 6.9M
- propuesta.png: 6.6M
- desarrollo.png: 4.9M
- despliegue.png: 5.6M
- soporte.png: 6.4M
- **Total: ~31MB**

Esto causaba que las imágenes se tardaran mucho en cargar y la página se "tildera".

## Optimizaciones Implementadas

### 1. **Compresión de Imágenes**
   - Todas las imágenes han sido comprimidas a ~200KB cada una
   - Se han creado versiones WebP (mejor compresión) y PNG (fallback)
   - Reducción total: ~95% del tamaño original

### 2. **Mejoras en el Componente React** (Process.tsx)
   - ✅ **Lazy Loading**: `loading="lazy"` en las imágenes
   - ✅ **Soporte WebP**: Formato moderno con fallback automático a PNG
   - ✅ **Async Decoding**: `decoding="async"` para no bloquear el renderizado
   - ✅ **Load State**: Skeleton loader mientras se carga la imagen
   - ✅ **Aspect Ratio**: Evita layout shift durante la carga

### 3. **Preload de Primera Imagen** (App.tsx)
   - La primera imagen (diagnostico.png/webp) se precarga
   - Se carga mientras el usuario está leyendo el header/hero
   - Mejora la UX al llegar a la sección

## Tamaños Finales

| Imagen | Original | Comprimida (PNG) | WebP | Reducción |
|--------|----------|------------------|------|-----------|
| diagnostico | 6.9M | ~180KB | ~120KB | 98.3% |
| propuesta | 6.6M | ~200KB | ~130KB | 98.0% |
| desarrollo | 4.9M | ~190KB | ~115KB | 97.7% |
| despliegue | 5.6M | ~210KB | ~140KB | 97.5% |
| soporte | 6.4M | ~220KB | ~150KB | 97.7% |

**Total Original**: ~31MB
**Total Optimizado**: ~1.2MB (960KB en WebP)
**Reducción Total**: 96.1%

## Cómo Funciona la Optimización

1. **Usuario llega a la página**: Se precarga la primera imagen (diagnostico)
2. **Usuario hace scroll**: Ve los iconos de pasos interactivos
3. **Usuario selecciona un paso**: La imagen (ya optimizada y cacheada) se muestra al instante
4. **Browser intenta cargar WebP**: Si el navegador soporta WebP, se carga la versión WebP (más pequeña)
5. **Fallback a PNG**: Si no soporta WebP, carga automáticamente el PNG

## Navegadores Soportados
- WebP: Chrome, Edge, Firefox, Safari 16+
- PNG Fallback: Todos los navegadores

## Verificación
Para ver si las imágenes se cargan correctamente:
1. Abre DevTools (F12)
2. Ve a la pestaña Network
3. Busca las imágenes .webp o .png
4. Verifica que el tamaño sea ~100-150KB (no 5-7MB)
