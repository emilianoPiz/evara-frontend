import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/firebase-related-services/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const PROTECTED_ROUTES: string[] = ['/admin'];

  return authService.user$.pipe(
    map((user) => {
      if (PROTECTED_ROUTES.includes(state.url) && !user) {
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};
