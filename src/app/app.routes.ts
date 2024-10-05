import { Route  } from '@angular/router';

export const ROUTES: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('./jelly-feature/components/jelly-form-container/jelly.routes').then((mod) =>
                mod.JELLY_ROUTE
    )        
    },
    {
        path: 'adventurer',
        loadChildren: () =>
            import('./adventure-feature/adventurer.route').then(mod => 
                mod.ADVENTURER_ROUTE
            )
    }
]