import { Subject } from 'rxjs/Subject';

/* Ocorria um erro de validação do TSLint por quando usava o EventEmitter (mas mesmo assim funcionava).
 * O EventEmitter é principalmente utilizado do Componente Filho para o Componente Pai (Child => Parent). Para comunicações
 * entre Service => Component, deve ser utilizado o Subject ao invés do EventEmitter.
 *
 * Descoberto em: https://stackoverflow.com/questions/53137371/context-this-of-eventemitter-string-is-not-assigned-to-the-this-method-of#
 */

export class NotificationService {
    private notifier = new Subject<string>();
    notifier$ = this.notifier.asObservable();

    notify(message: string) {
        this.notifier.next(message);
    }
}
