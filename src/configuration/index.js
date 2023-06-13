/* eslint-disable import/prefer-default-export */
import StateMachineConfigurator from './StateMachineConfigurator.js';
import GlobalConfigurator from './GlobalConfigurator.js';
import StateConfigurator from './StateConfigurator.js';
import TriggerConfigurator from './TriggerConfigurator.js';
import TransitionConfigurator from './TransitionConfigurator.js';
import AsyncActionConfigurator from './AsyncActionConfigurator.js';
import delegateToAncestor from './delegateToAncestor.js';

export { StateMachineConfigurator };

delegateToAncestor(GlobalConfigurator, StateMachineConfigurator);
delegateToAncestor(StateConfigurator, StateMachineConfigurator);
delegateToAncestor(TransitionConfigurator, StateConfigurator);
delegateToAncestor(TransitionConfigurator, TriggerConfigurator);
delegateToAncestor(TransitionConfigurator, AsyncActionConfigurator);
