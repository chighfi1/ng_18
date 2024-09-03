import { Route  } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./jelly-feature/components/jelly-form-container/feature.routes').then((mod) =>
                mod.JELLY_ROUTE
    )        
    }
]